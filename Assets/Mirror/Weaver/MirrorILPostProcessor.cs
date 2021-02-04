using Unity.CompilationPipeline.Common.ILPostProcessing;
using System.Linq;
using System.IO;
using Mono.Cecil;
using Mono.Cecil.Cil;

#if LEGACY_ILPP
using ILPostProcessor = Mirror.Weaver.ILegacyPostProcessor;
#endif

namespace Mirror.Weaver
{
    public class MirrorILPostProcessor : ILPostProcessor
    {
        public const string RuntimeAssemblyName = "Mirror";

        public override ILPostProcessor GetInstance() => this;

        public override ILPostProcessResult Process(ICompiledAssembly compiledAssembly)
        {
            if (!WillProcess(compiledAssembly))
                return null;

            var logger = new Logger();
            var weaver = new Weaver(logger);

            AssemblyDefinition assemblyDefinition = weaver.Weave(compiledAssembly);

            // write
            var pe = new MemoryStream();
            var pdb = new MemoryStream();

            var writerParameters = new WriterParameters
            {
                SymbolWriterProvider = new PortablePdbWriterProvider(),
                SymbolStream = pdb,
                WriteSymbols = true
            };

            assemblyDefinition?.Write(pe, writerParameters);

            return new ILPostProcessResult(new InMemoryAssembly(pe.ToArray(), pdb.ToArray()), logger.Diagnostics);
        }

        public override bool WillProcess(ICompiledAssembly compiledAssembly) =>
            compiledAssembly.References.Any(filePath => Path.GetFileNameWithoutExtension(filePath) == RuntimeAssemblyName);
    }
}