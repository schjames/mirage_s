using Mirage;
using UnityEngine;
using Mirage.Serialization;

namespace GeneralTests.TestingScriptableObjectArraySerialization
{
    public static class CustomSerializer
    {
        public static void Writedata(this NetworkWriter writer, Data arg)
        {
            writer.WriteInt32(arg.Var1);
        }

        public static Data Readdata(this NetworkReader reader)
        {
            return new Data
            {
                Var1 = reader.ReadInt32()
            };
        }
    }

    public class Data : ScriptableObject
    {
        public int Var1;
    }

    public class TestingScriptableObjectArraySerialization : NetworkBehaviour
    {
        [ServerRpc]
        public void
            // This gonna give error saying-- Mirage.Weaver error: 
            // Cannot generate writer for scriptable object Data[]. Use a supported type or provide a custom writer
            CmdwriteArraydata(
                Data[] arg)
        {

            //some code
        }
    }
}
