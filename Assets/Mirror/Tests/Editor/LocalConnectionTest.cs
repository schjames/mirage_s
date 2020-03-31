using System;
using NUnit.Framework;
using UnityEngine;

namespace Mirror.Tests
{
    [Category("LocalConnection")]
    public class LocalConnectionTest
    {

        /*class MyMessage : MessageBase
        {
            public int id;
            public string name;
        }*/

        ULocalConnectionToClient connectionToClient;
        ULocalConnectionToServer connectionToServer;

        [SetUp]
        public void SetUpConnections()
        {
            (connectionToServer, connectionToClient) = ULocalConnectionToClient.CreateLocalConnections();
        }

        [TearDown]
        public void Disconnect()
        {
            connectionToServer.Disconnect();
        }

        [Test]
        public void LocalConnectionToClientAddressTest()
        {
            Assert.That(connectionToClient.Address, Is.EqualTo("localhost"));
        }

        [Test]
        public void LocalConnectionToServerAddressTest()
        {
            Assert.That(connectionToServer.Address, Is.EqualTo("localhost"));
        }

        [Test]
        public void ClientToServerFailTest()
        {
            Assert.Throws<InvalidMessageException>( () => connectionToServer.Send(new ArraySegment<byte>(new byte[0])));
        }

        /*[Test]
        public void ServerToClientTest()
        {
            Assert.That(connectionToClient.address, Is.EqualTo("localhost"));

            var myMessage = new MyMessage
            {
                id = 3,
                name = "hello"
            };

            bool invoked = false;

            void handler(NetworkConnection conn, NetworkReader reader, int channelId)
            {
                var received = new MyMessage();
                received.Deserialize(reader);
                Assert.That(received.id, Is.EqualTo(3));
                Assert.That(received.name, Is.EqualTo("hello"));
                invoked = true;
            }

            var handlers = new Dictionary<int, NetworkMessageDelegate>
            {
                { MessagePacker.GetId<MyMessage>(), handler }
            };

            connectionToClient.SetHandlers(handlers);
            connectionToServer.Send(myMessage);

            connectionToServer.Update();

            Assert.True(invoked, "handler should have been invoked");
        }*/

        /*[Test]
        public void ClientToServerTest()
        {
            Assert.That(connectionToServer.address, Is.EqualTo("localhost"));

            var myMessage = new MyMessage
            {
                id = 3,
                name = "hello"
            };

            bool invoked = false;

            void handler(NetworkConnection conn, NetworkReader reader, int channelId)
            {
                var received = new MyMessage();
                received.Deserialize(reader);
                Assert.That(received.id, Is.EqualTo(3));
                Assert.That(received.name, Is.EqualTo("hello"));
                invoked = true;
            }

            var handlers = new Dictionary<int, NetworkMessageDelegate>
            {
                { MessagePacker.GetId<MyMessage>(), handler }
            };

            connectionToServer.SetHandlers(handlers);
            connectionToClient.Send(myMessage);

            connectionToServer.Update();

            Assert.True(invoked, "handler should have been invoked");
        }*/

    }
}
