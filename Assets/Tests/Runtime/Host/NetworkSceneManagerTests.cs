using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Cysharp.Threading.Tasks;
using NSubstitute;
using NUnit.Framework;
using UnityEngine.Events;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

#if UNITY_EDITOR
using UnityEditor.SceneManagement;
#endif

namespace Mirage.Tests.Runtime.Host
{
    [Category("LoadsScene")]
    public class NetworkSceneManagerTests : HostSetup<MockComponent>
    {
        UnityAction<Scene, SceneOperation> sceneEventFunction;

        public override void ExtraSetup()
        {
            sceneEventFunction = Substitute.For<UnityAction<Scene, SceneOperation>>();
            sceneManager.OnServerFinishedSceneChange.AddListener(sceneEventFunction);
        }

        [Test]
        public void FinishLoadSceneHostTest()
        {
            UnityAction<Scene, SceneOperation> func2 = Substitute.For<UnityAction<Scene, SceneOperation>>();
            UnityAction<Scene, SceneOperation> func3 = Substitute.For<UnityAction<Scene, SceneOperation>>();

            sceneManager.OnServerFinishedSceneChange.AddListener(func2);
            sceneManager.OnClientFinishedSceneChange.AddListener(func3);

            sceneManager.CompleteLoadingScene(default, SceneOperation.Normal);

            func2.Received(1).Invoke(Arg.Any<Scene>(), Arg.Any<SceneOperation>());
            func3.Received(1).Invoke(Arg.Any<Scene>(), Arg.Any<SceneOperation>());
        }

        [UnityTest]
        public IEnumerator FinishLoadServerOnlyTest() => UniTask.ToCoroutine(async () =>
        {
            UnityAction<Scene, SceneOperation> func1 = Substitute.For<UnityAction<Scene, SceneOperation>>();

            client.Disconnect();

            await AsyncUtil.WaitUntilWithTimeout(() => !client.Active);

            sceneManager.OnServerFinishedSceneChange.AddListener(func1);

            sceneManager.CompleteLoadingScene(default, SceneOperation.Normal);

            func1.Received(1).Invoke(Arg.Any<Scene>(), Arg.Any<SceneOperation>());
        });

        [UnityTest]
        public IEnumerator ServerChangeSceneTest() => UniTask.ToCoroutine(async () =>
        {
            bool invokeClientSceneMessage = false;
            bool invokeNotReadyMessage = false;
            UnityAction<string, SceneOperation> func1 = Substitute.For<UnityAction<string, SceneOperation>>();
            ClientMessageHandler.RegisterHandler<SceneMessage>(msg => invokeClientSceneMessage = true);
            ClientMessageHandler.RegisterHandler<SceneNotReadyMessage>(msg => invokeNotReadyMessage = true);
            sceneManager.OnServerStartedSceneChange.AddListener(func1);

            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            await AsyncUtil.WaitUntilWithTimeout(() => sceneManager.ActiveScenePath != null);

            func1.Received(1).Invoke(Arg.Any<string>(), Arg.Any<SceneOperation>());
            Assert.That(sceneManager.ActiveScenePath, Is.Not.Null);
            Assert.That(invokeClientSceneMessage, Is.True);
            Assert.That(invokeNotReadyMessage, Is.True);
        });

        [Test]
        public void ServerChangedFiredOnceTest()
        {
            sceneEventFunction.Received(1).Invoke(Arg.Any<Scene>(), Arg.Any<SceneOperation>());
        }

        [Test]
        public void CheckServerSceneDataNotEmptyTest()
        {
            Assert.That(sceneManager.ServerSceneData, Is.Not.Null);
        }

        [Test]
        public void ChangeServerSceneExceptionTest()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                sceneManager.ServerLoadSceneNormal(string.Empty);
            });
        }

        [Test]
        public void ReadyTest()
        {
            sceneManager.SetSceneIsReady();
            Assert.That(client.Player.SceneIsReady);
        }

        [UnityTest]
        public IEnumerator ReadyExceptionTest() => UniTask.ToCoroutine(async () =>
        {
            sceneManager.Client.Disconnect();

            await AsyncUtil.WaitUntilWithTimeout(() => !sceneManager.Client.Active);

            Assert.Throws<InvalidOperationException>(() =>
            {
                sceneManager.SetSceneIsReady();
            });
        });

        [Test]
        public void ClientChangeSceneTest()
        {
            UnityAction<string, SceneOperation> func1 = Substitute.For<UnityAction<string, SceneOperation>>();
            sceneManager.OnClientStartedSceneChange.AddListener(func1);

            sceneManager.OnClientStartedSceneChange.Invoke(default, SceneOperation.Normal);

            func1.Received(1).Invoke(Arg.Any<string>(), Arg.Any<SceneOperation>());
        }

        [Test]
        public void ClientSceneChangedTest()
        {
            UnityAction<Scene, SceneOperation> func1 = Substitute.For<UnityAction<Scene, SceneOperation>>();
            sceneManager.OnClientFinishedSceneChange.AddListener(func1);
            sceneManager.OnClientFinishedSceneChange.Invoke(default, SceneOperation.Normal);
            func1.Received(1).Invoke(Arg.Any<Scene>(), Arg.Any<SceneOperation>());
        }

        [Test]
        public void ClientSceneReadyAfterChangedTest()
        {
            bool _readyAfterSceneChanged = false;
            sceneManager.OnClientFinishedSceneChange.AddListener((Scene scene, SceneOperation operation) => _readyAfterSceneChanged = client.Player.SceneIsReady);
            sceneManager.OnClientFinishedSceneChange.Invoke(default, SceneOperation.Normal);

            Assert.That(_readyAfterSceneChanged, Is.True);
        }

        [UnityTest]
        public IEnumerator ChangeSceneAdditiveLoadTest() => UniTask.ToCoroutine(async () =>
        {
            sceneManager.ServerLoadSceneAdditively(TestScene.Path, new[] { client.Player });

            await AsyncUtil.WaitUntilWithTimeout(() => sceneManager.ActiveScenePath != null);

            Assert.That(sceneManager.ActiveScenePath, Is.Not.Null);
        });

        [Test]
        public void ClientChangeSceneNotNullTest()
        {
            Assert.That(sceneManager.OnClientStartedSceneChange, Is.Not.Null);
        }

        [Test]
        public void ClientSceneChangedNotNullTest()
        {
            Assert.That(sceneManager.OnClientFinishedSceneChange, Is.Not.Null);
        }

        [Test]
        public void ServerChangeSceneNotNullTest()
        {
            Assert.That(sceneManager.OnServerStartedSceneChange, Is.Not.Null);
        }

        [Test]
        public void ServerSceneChangedNotNullTest()
        {
            Assert.That(sceneManager.OnServerFinishedSceneChange, Is.Not.Null);
        }

        [Test]
        public void ServerCheckScenesPlayerIsInTest()
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            Scene[] scenes = sceneManager.ScenesPlayerIsIn(server.LocalPlayer);

            Assert.That(scenes, Is.Not.Null);
        }

        [UnityTest]
        public IEnumerator ClientNotReadyMessageTest() => UniTask.ToCoroutine(async () =>
        {
            sceneManager.ClientNotReadyMessage(client.Player, new SceneNotReadyMessage());

            await UniTask.Delay(1);

            Assert.That(sceneManager.Client.Player.SceneIsReady, Is.Not.True);
        });

        [Test]
        public void ServerUnloadSceneCheckServerNotNullTest()
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            sceneManager.Server = null;

            InvalidOperationException exception = Assert.Throws<InvalidOperationException>(() =>
            {
                sceneManager.ServerUnloadSceneAdditively(SceneManager.GetActiveScene(), new[] { server.LocalPlayer });
            });

            string message = new InvalidOperationException("Method can only be called if server is active").Message;
            Assert.That(exception, Has.Message.EqualTo(message));
        }

        [Test]
        public void ServerUnloadSceneAdditivelySceneNotNullTest()
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            ArgumentNullException exception = Assert.Throws<ArgumentNullException>(() =>
            {
                sceneManager.ServerUnloadSceneAdditively(default, null);
            });

            string message = new ArgumentNullException("scene", "[NetworkSceneManager] - ServerChangeScene: " + "scene" + " cannot be null").Message;
            Assert.That(exception, Has.Message.EqualTo(message));
        }


        [Test]
        public void ServerUnloadSceneAdditivelyPlayersNotNullTest()
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            ArgumentNullException exception = Assert.Throws<ArgumentNullException>(() =>
            {
                sceneManager.ServerUnloadSceneAdditively(SceneManager.GetActiveScene(), null);
            });

            string message = new ArgumentNullException("players", "[NetworkSceneManager] - list of player's cannot be null or no players.").Message;
            Assert.That(exception, Has.Message.EqualTo(message));
        }

        [UnityTest]
        public IEnumerator ServerUnloadSceneAdditivelyListenerInvokedTest() => UniTask.ToCoroutine(async () =>
        {
            bool _invokedOnServerStartedSceneChange = false;

            sceneManager.ServerLoadSceneNormal(TestScene.Path);

#if UNITY_EDITOR
            await EditorSceneManager.LoadSceneAsyncInPlayMode("Assets/Tests/Performance/Runtime/10K/Scenes/Scene.unity", new LoadSceneParameters { loadSceneMode = LoadSceneMode.Additive });
#else
            throw new System.NotSupportedException("Test not supported in player");
#endif

            sceneManager.OnServerStartedSceneChange.AddListener((arg0, operation) => _invokedOnServerStartedSceneChange = true);

            sceneManager.ServerUnloadSceneAdditively(SceneManager.GetActiveScene(), new[] { server.LocalPlayer });

            await AsyncUtil.WaitUntilWithTimeout(() => _invokedOnServerStartedSceneChange);

            Assert.That(_invokedOnServerStartedSceneChange, Is.True);
        });

        [Test]
        public void ServerSceneLoadingNullPlayersCheckTest()
        {
            ArgumentNullException exception = Assert.Throws<ArgumentNullException>(() =>
            {
                sceneManager.ServerLoadSceneAdditively(TestScene.Path, null);
            });

            string message = new ArgumentNullException("players", "No player's were added to send for information").Message;
            Assert.That(exception, Has.Message.EqualTo(message));
        }

        [Test]
        public void IsPlayerInSceneThrowForInvalidScene()
        {
            ArgumentException exception = Assert.Throws<ArgumentException>(() =>
            {
                sceneManager.IsPlayerInScene(default, server.LocalPlayer);
            });

            string message = new ArgumentException("Scene is not valid", "scene").Message;
            Assert.That(exception, Has.Message.EqualTo(message));
        }
        [Test]
        public void IsPlayerInSceneThrowForNotFoundScene()
        {
            Scene scene = SceneManager.CreateScene("Not Found Scene");
            KeyNotFoundException exception = Assert.Throws<KeyNotFoundException>(() =>
            {
                sceneManager.IsPlayerInScene(scene, server.LocalPlayer);
            });

            string message = new KeyNotFoundException($"Could not find player list for scene:{scene}").Message;
            Assert.That(exception, Has.Message.EqualTo(message));

            // cleanup
            SceneManager.UnloadSceneAsync(scene);
        }


        [UnityTest]
        public IEnumerator OnServerDisconnectPlayerTest() => UniTask.ToCoroutine(async () =>
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            await AsyncUtil.WaitUntilWithTimeout(() => sceneManager.ServerSceneData.Count > 0);

            sceneManager.OnServerPlayerDisconnected(sceneManager.Server.Players.ElementAt(0));

            Assert.That(sceneManager.IsPlayerInScene(sceneManager.ServerSceneData.ElementAt(0).Key,
                server.Players.ElementAt(0)), Is.False);
        });

        [UnityTest]
        public IEnumerator IsPlayerInSceneTest() => UniTask.ToCoroutine(async () =>
        {
            sceneManager.ServerLoadSceneNormal(TestScene.Path);

            await AsyncUtil.WaitUntilWithTimeout(() => sceneManager.ServerSceneData.Count > 0);

            Assert.That(sceneManager.IsPlayerInScene(sceneManager.ServerSceneData.ElementAt(0).Key, server.Players.ElementAt(0)),
                Is.True);
        });
    }
}
