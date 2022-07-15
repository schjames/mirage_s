// DO NOT EDIT: GENERATED BY QuaternionPackTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.QuaternionPackAttributeTests._10_45
{
    public class BitPackBehaviour : NetworkBehaviour
    {
        [QuaternionPack(10)]
        [SyncVar] public Quaternion myValue;

        public event Action<Quaternion> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([QuaternionPack(10)] Quaternion myParam)
        {
            onRpc?.Invoke(myParam);
        }
        
        // Use BitPackStruct in rpc so it has writer generated
        [ClientRpc]
        public void RpcOtherFunction(BitPackStruct myParam)
        {
            // nothing
        }
    }
    
    [NetworkMessage]
    public struct BitPackMessage 
    {
        [QuaternionPack(10)] 
        public Quaternion myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
        [QuaternionPack(10)] 
        public Quaternion myValue;
    }

    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        private static readonly Quaternion value = new Quaternion(0.2705981f, 0.6532815f, -0.2705981f, 0.6532815f);
        private const float within = 0.00135f;

        private static void AssertValue(Quaternion actual)
        {
            Vector3 inVec = value * Vector3.forward;
            Vector3 outVec = actual * Vector3.forward;

            // allow for extra within when rotating vector
            Assert.AreEqual(inVec.x, outVec.x, within * 2, $"vx off by {Mathf.Abs(inVec.x - outVec.x)}");
            Assert.AreEqual(inVec.y, outVec.y, within * 2, $"vy off by {Mathf.Abs(inVec.y - outVec.y)}");
            Assert.AreEqual(inVec.z, outVec.z, within * 2, $"vz off by {Mathf.Abs(inVec.z - outVec.z)}");
        }

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(32));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(32));

                    AssertValue(clientComponent.myValue);
                }
            }
        }

        [UnityTest]
        public IEnumerator RpcIsBitPacked()
        {
            int called = 0;
            clientComponent.onRpc += (v) => 
            { 
                called++;
                AssertValue(v);
            };

            client.MessageHandler.UnregisterHandler<RpcMessage>();
            int payloadSize = 0;
            client.MessageHandler.RegisterHandler<RpcMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                payloadSize = msg.payload.Count;
                clientObjectManager.OnRpcMessage(msg);
            });

            serverComponent.RpcSomeFunction(value);
            yield return null;
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            
            // this will round up to nearest 8
            int expectedPayLoadSize = (32 + 7) / 8;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"32 bits is %%PAYLOAD_SIZE%% bytes in payload");
        }

        [UnityTest]
        public IEnumerator StructIsBitPacked() 
        {
            var inMessage = new BitPackMessage 
            {
                myValue = value,
            };

            int payloadSize = 0;
            int called = 0;
            BitPackMessage outMessage = default;
            server.MessageHandler.RegisterHandler<BitPackMessage>((player, msg) =>
            {
                // store value in variable because assert will throw and be catch by message wrapper
                called++;
                outMessage = msg;
            });
            Action<NetworkDiagnostics.MessageInfo> diagAction = (info) =>
            {
                if (info.message is BitPackMessage)
                {
                    payloadSize = info.bytes;
                }
            };

            NetworkDiagnostics.OutMessageEvent += diagAction;
            client.Player.Send(inMessage);
            NetworkDiagnostics.OutMessageEvent -= diagAction;
            yield return null;
            yield return null;
            Assert.That(called, Is.EqualTo(1));
            // this will round up to nearest 8
            // +2 for message header
            int expectedPayLoadSize = ((32 + 7) / 8) + 2;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"32 bits is {expectedPayLoadSize - 2} bytes in payload");
            AssertValue(outMessage.myValue);
        }

        [Test]
        public void MessageIsBitPacked() 
        {
            var inStruct = new BitPackStruct 
            {
                myValue = value,
            };

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                // generic write, uses generated function that should include bitPacking
                writer.Write(inStruct);

                Assert.That(writer.BitPosition, Is.EqualTo(32));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    var outStruct = reader.Read<BitPackStruct>();
                    Assert.That(reader.BitPosition, Is.EqualTo(32));

                    AssertValue(outStruct.myValue);
                }
            }
        }
    }
}
