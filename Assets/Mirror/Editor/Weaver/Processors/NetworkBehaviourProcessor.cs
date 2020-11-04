using System.Collections.Generic;
using Mono.Cecil;
using Mono.Cecil.Cil;
using MethodAttributes = Mono.Cecil.MethodAttributes;
using ParameterAttributes = Mono.Cecil.ParameterAttributes;
using TypeAttributes = Mono.Cecil.TypeAttributes;

namespace Mirror.Weaver
{
    public enum RemoteCallType
    {
        ServerRpc,
        ClientRpc
    }

    /// <summary>
    /// processes SyncVars, Cmds, Rpcs, etc. of NetworkBehaviours
    /// </summary>
    class NetworkBehaviourProcessor
    {
        List<FieldDefinition> syncObjects = new List<FieldDefinition>();

        readonly TypeDefinition netBehaviourSubclass;
        readonly ServerRpcProcessor serverRpcProcessor = new ServerRpcProcessor();
        readonly ClientRpcProcessor clientRpcProcessor = new ClientRpcProcessor();
        readonly SyncVarProcessor syncVarProcessor = new SyncVarProcessor();

        public NetworkBehaviourProcessor(TypeDefinition td)
        {
            Weaver.DLog(td, "NetworkBehaviourProcessor");
            netBehaviourSubclass = td;
        }

        // return true if modified
        public bool Process()
        {
            // only process once
            if (WasProcessed(netBehaviourSubclass))
            {
                return false;
            }
            Weaver.DLog(netBehaviourSubclass, "Found NetworkBehaviour " + netBehaviourSubclass.FullName);

            if (netBehaviourSubclass.HasGenericParameters)
            {
                Weaver.Error($"{netBehaviourSubclass.Name} cannot have generic parameters", netBehaviourSubclass);
                // originally Process returned true in every case, except if already processed.
                // maybe return false here in the future.
                return true;
            }
            Weaver.DLog(netBehaviourSubclass, "Process Start");
            MarkAsProcessed(netBehaviourSubclass);

            syncVarProcessor.ProcessSyncVars(netBehaviourSubclass);

            syncObjects = SyncObjectProcessor.FindSyncObjectsFields(netBehaviourSubclass);

            ProcessMethods();
            if (Weaver.WeavingFailed)
            {
                // originally Process returned true in every case, except if already processed.
                // maybe return false here in the future.
                return true;
            }
            GenerateConstants();

            syncVarProcessor.GenerateSerialization(netBehaviourSubclass);
            if (Weaver.WeavingFailed)
            {
                // originally Process returned true in every case, except if already processed.
                // maybe return false here in the future.
                return true;
            }

            syncVarProcessor.GenerateDeSerialization(netBehaviourSubclass);
            Weaver.DLog(netBehaviourSubclass, "Process Done");
            return true;
        }

        public static void WriteSetupLocals(ILProcessor worker)
        {
            worker.Body.InitLocals = true;
            worker.Body.Variables.Add(new VariableDefinition(WeaverTypes.Import<PooledNetworkWriter>()));
        }

        public static void WriteCreateWriter(ILProcessor worker)
        {
            // create writer
            worker.Append(worker.Create(OpCodes.Call, WeaverTypes.GetPooledWriterReference));
            worker.Append(worker.Create(OpCodes.Stloc_0));
        }

        public static void WriteRecycleWriter(ILProcessor worker)
        {
            // NetworkWriterPool.Recycle(writer);
            worker.Append(worker.Create(OpCodes.Ldloc_0));
            worker.Append(worker.Create(OpCodes.Call, WeaverTypes.RecycleWriterReference));
        }

        #region mark / check type as processed
        public const string ProcessedFunctionName = "MirrorProcessed";

        // by adding an empty MirrorProcessed() function
        public static bool WasProcessed(TypeDefinition td)
        {
            return td.GetMethod(ProcessedFunctionName) != null;
        }

        public static void MarkAsProcessed(TypeDefinition td)
        {
            if (!WasProcessed(td))
            {
                var versionMethod = new MethodDefinition(ProcessedFunctionName, MethodAttributes.Private, WeaverTypes.Import(typeof(void)));
                ILProcessor worker = versionMethod.Body.GetILProcessor();
                worker.Append(worker.Create(OpCodes.Ret));
                td.Methods.Add(versionMethod);
            }
        }
        #endregion

        void GenerateConstants()
        {
            Weaver.DLog(netBehaviourSubclass, "  GenerateConstants ");

            // find static constructor
            MethodDefinition cctor = netBehaviourSubclass.GetMethod(".cctor");
            bool cctorFound = cctor != null;
            if (cctor != null)
            {
                // remove the return opcode from end of function. will add our own later.
                if (cctor.Body.Instructions.Count != 0)
                {
                    Instruction retInstr = cctor.Body.Instructions[cctor.Body.Instructions.Count - 1];
                    if (retInstr.OpCode == OpCodes.Ret)
                    {
                        cctor.Body.Instructions.RemoveAt(cctor.Body.Instructions.Count - 1);
                    }
                    else
                    {
                        Weaver.Error($"{netBehaviourSubclass.Name} has invalid class constructor", cctor);
                        return;
                    }
                }
            }
            else
            {
                // make one!
                cctor = new MethodDefinition(".cctor", MethodAttributes.Private |
                        MethodAttributes.HideBySig |
                        MethodAttributes.SpecialName |
                        MethodAttributes.RTSpecialName |
                        MethodAttributes.Static,
                        WeaverTypes.Import(typeof(void)));
            }

            // find instance constructor
            MethodDefinition ctor = netBehaviourSubclass.GetMethod(".ctor");

            if (ctor == null)
            {
                Weaver.Error($"{netBehaviourSubclass.Name} has invalid constructor", netBehaviourSubclass);
                return;
            }

            Instruction ret = ctor.Body.Instructions[ctor.Body.Instructions.Count - 1];
            if (ret.OpCode == OpCodes.Ret)
            {
                ctor.Body.Instructions.RemoveAt(ctor.Body.Instructions.Count - 1);
            }
            else
            {
                Weaver.Error($"{netBehaviourSubclass.Name} has invalid constructor", ctor);
                return;
            }

            ILProcessor ctorWorker = ctor.Body.GetILProcessor();
            ILProcessor cctorWorker = cctor.Body.GetILProcessor();

            serverRpcProcessor.RegisterServerRpcs(cctorWorker);

            clientRpcProcessor.RegisterClientRpcs(cctorWorker);

            foreach (FieldDefinition fd in syncObjects)
            {
                SyncObjectInitializer.GenerateSyncObjectInitializer(ctorWorker, fd);
            }

            cctorWorker.Append(cctorWorker.Create(OpCodes.Ret));
            if (!cctorFound)
            {
                netBehaviourSubclass.Methods.Add(cctor);
            }

            // finish ctor
            ctorWorker.Append(ctorWorker.Create(OpCodes.Ret));

            // in case class had no cctor, it might have BeforeFieldInit, so injected cctor would be called too late
            netBehaviourSubclass.Attributes &= ~TypeAttributes.BeforeFieldInit;
        }


        void ProcessMethods()
        {
            var names = new HashSet<string>();

            // copy the list of methods because we will be adding methods in the loop
            var methods = new List<MethodDefinition>(netBehaviourSubclass.Methods);
            // find ServerRpc and RPC functions
            foreach (MethodDefinition md in methods)
            {
                bool rpc = false;
                foreach (CustomAttribute ca in md.CustomAttributes)
                {
                    if (ca.AttributeType.Is<ServerRpcAttribute>())
                    {
                        serverRpcProcessor.ProcessServerRpc(md, ca);
                        rpc = true;
                        break;
                    }

                    if (ca.AttributeType.Is<ClientRpcAttribute>())
                    {
                        clientRpcProcessor.ProcessClientRpc(md, ca);
                        rpc = true;
                        break;
                    }
                }

                if (rpc)
                {
                    if (names.Contains(md.Name))
                    {
                        Weaver.Error($"Duplicate Rpc name {md.Name}", md);
                    }
                    names.Add(md.Name);
                }
            }
        }
    }
}
