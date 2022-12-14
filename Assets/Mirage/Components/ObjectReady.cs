namespace Mirage
{
    public class ObjectReady : NetworkBehaviour
    {
        [SyncVar]
        public bool IsReady;

        [Server]
        public void SetClientReady()
        {
            IsReady = true;
        }

        [Server]
        public void SetClientNotReady()
        {
            IsReady = false;
        }

        [Client]
        public void Ready()
        {
            ReadyRpc();
        }

        [ServerRpc]
        private void ReadyRpc()
        {
            IsReady = true;
        }
    }
}
