using UnityEngine;
using UnityEngine.SceneManagement;

namespace Mirage.Examples.MultipleAdditiveScenes
{
    public class Spawner : NetworkBehaviour
    {
        public NetworkIdentity prizePrefab;

        public void OnStartServer()
        {
            for (var i = 0; i < 10; i++)
                SpawnPrize();
        }

        public void SpawnPrize()
        {
            var spawnPosition = new Vector3(Random.Range(-19, 20), 1, Random.Range(-19, 20));

            var newPrize = Instantiate(prizePrefab.gameObject, spawnPosition, Quaternion.identity);
            var reward = newPrize.gameObject.GetComponent<Reward>();
            reward.spawner = this;

            ServerObjectManager.Spawn(newPrize);
            SceneManager.MoveGameObjectToScene(newPrize, gameObject.scene);
        }
    }
}
