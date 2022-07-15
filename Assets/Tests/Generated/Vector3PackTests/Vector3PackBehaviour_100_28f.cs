// DO NOT EDIT: GENERATED BY Vector3PackTestGenerator.cs

using System;
using System.Collections;
using Mirage.Serialization;
using Mirage.Tests.Runtime.ClientServer;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Runtime.Generated.Vector3PackAttributeTests._100_28f
{
    public class BitPackBehaviour : NetworkBehaviour
    {
        [Vector3Pack(100f, 20f, 100f, 0.2f)]
        [SyncVar] public Vector3 myValue;

        public event Action<Vector3> onRpc;

        [ClientRpc]
        public void RpcSomeFunction([Vector3Pack(100f, 20f, 100f, 0.2f)] Vector3 myParam)
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
        [Vector3Pack(100f, 20f, 100f, 0.2f)] 
        public Vector3 myValue;
    }

    [Serializable]
    public struct BitPackStruct
    {
        [Vector3Pack(100f, 20f, 100f, 0.2f)] 
        public Vector3 myValue;
    }

    public class BitPackTest : ClientServerSetup<BitPackBehaviour>
    {
        private static readonly Vector3 value = new Vector3(10.3f, 0.2f, 20f);
        private const float within = 0.2f;

        private static void AssertValue(Vector3 actual)
        {
            Assert.That(actual.x, Is.EqualTo(value.x).Within(within));
            Assert.That(actual.y, Is.EqualTo(value.y).Within(within));
            Assert.That(actual.z, Is.EqualTo(value.z).Within(within));
        }

        [Test]
        public void SyncVarIsBitPacked()
        {
            serverComponent.myValue = value;

            using (PooledNetworkWriter writer = NetworkWriterPool.GetWriter())
            {
                serverComponent.SerializeSyncVars(writer, true);

                Assert.That(writer.BitPosition, Is.EqualTo(28));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    clientComponent.DeserializeSyncVars(reader, true);
                    Assert.That(reader.BitPosition, Is.EqualTo(28));

                    Assert.That(clientComponent.myValue.x, Is.EqualTo(value.x).Within(within));
                    Assert.That(clientComponent.myValue.y, Is.EqualTo(value.y).Within(within));
                    Assert.That(clientComponent.myValue.z, Is.EqualTo(value.z).Within(within));
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
            int expectedPayLoadSize = (28 + 7) / 8;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"28 bits is %%PAYLOAD_SIZE%% bytes in payload");
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
            int expectedPayLoadSize = ((28 + 7) / 8) + 2;
            Assert.That(payloadSize, Is.EqualTo(expectedPayLoadSize), $"28 bits is {expectedPayLoadSize - 2} bytes in payload");
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

                Assert.That(writer.BitPosition, Is.EqualTo(28));

                using (PooledNetworkReader reader = NetworkReaderPool.GetReader(writer.ToArraySegment(), null))
                {
                    var outStruct = reader.Read<BitPackStruct>();
                    Assert.That(reader.BitPosition, Is.EqualTo(28));

                    AssertValue(outStruct.myValue);
                }
            }
        }
    }
}
