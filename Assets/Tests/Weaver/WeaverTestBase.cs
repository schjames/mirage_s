using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Mirage.Logging;
using Mirage.Weaver;
using Mono.Cecil;
using NUnit.Framework;
using Unity.CompilationPipeline.Common.Diagnostics;
using UnityEngine;
using UnityEngine.TestTools;

namespace Mirage.Tests.Weaver
{
    public class AssertionMethodAttribute : Attribute { }

    /// <summary>
    /// Add this to test that can be batched and run together
    /// <para>Most of the time this will be only success test</para>
    /// </summary>
    public class BatchSafeAttribute : Attribute
    {
        /// <summary>
        /// If test should success without weaver errors
        /// <para>if false then test should check to see if errors are correct</para>
        /// </summary>
        public BatchType Type { get; }

        public BatchSafeAttribute(BatchType type)
        {
            Type = type;
        }
    }

    public enum BatchType
    {
        /// <summary>
        /// Tests that should pass weaver without errors
        /// </summary>
        Success = 0,
        /// <summary>
        /// Tests that should fail weaver with errors. Tests should then check those errors
        /// </summary>
        Fail = 1,
    }

    [TestFixture]
    public abstract class WeaverTestBase
    {
        public static readonly ILogger logger = LogFactory.GetLogger<WeaverTestBase>(LogType.Exception);

        protected Result batchSuccessResult { get; private set; }
        protected Result batchFailResult { get; private set; }

        protected Result testResult { get; private set; }

        bool currentTestIsBatch;
        protected IReadOnlyList<DiagnosticMessage> Diagnostics => testResult.weaverLog.Diagnostics;

        Task batchTask;

        private static Task<Result> BuildAndWeave(string className, string testName)
        {
            string testSourceDirectory = className + "~";

            string outputFile = testName + ".dll";
            string[] sourceFiles = new string[] { Path.Combine(testSourceDirectory, testName + ".cs") };

            return buildAndWeave(outputFile, sourceFiles);
        }

        private static Task<Result> BuildAndWeaveBatch(string className, string[] testNames)
        {
            string testSourceDirectory = className + "~";

            string outputFile = className + ".dll";
            string[] sourceFiles = testNames.Select(x => Path.Combine(testSourceDirectory, x + ".cs")).ToArray();

            return buildAndWeave(outputFile, sourceFiles);
        }

        private static async Task<Result> buildAndWeave(string outputFile, string[] sourceFiles)
        {
            var weaverLog = new WeaverLogger();
            var assembler = new Assembler(outputFile, sourceFiles);
            AssemblyDefinition assembly = await assembler.BuildAsync(weaverLog);
            return new Result(weaverLog, assembly, assembler);
        }


        [OneTimeSetUp]
        public virtual void OneTimeSetUp()
        {
            batchTask = batchAsync();
        }

        private async Task batchAsync()
        {
            string fullName = TestContext.CurrentContext.Test.ClassName;
            batchSuccessResult = await TestBatcher.RunBatch(fullName, IsBatchSafeSuccess);
            batchFailResult = await TestBatcher.RunBatch(fullName, IsBatchSafeFail);
        }

        /// <summary>Checks if method has Test and BatchSafe attritubes and is success test</summary>
        bool IsBatchSafeSuccess(MethodInfo method)
        {
            BatchSafeAttribute attr = method.GetCustomAttribute<BatchSafeAttribute>();
            return attr != null && attr.Type == BatchType.Success;
        }
        /// <summary>Checks if method has Test and BatchSafe attritubes and is fail test</summary>
        bool IsBatchSafeFail(MethodInfo method)
        {
            BatchSafeAttribute attr = method.GetCustomAttribute<BatchSafeAttribute>();
            return attr != null && attr.Type == BatchType.Fail;
        }
        static string GetClassName(string fullname)
        {
            return fullname.Split('.').Last();
        }

        [OneTimeTearDown]
        public void OneTimeTearDown()
        {
            batchSuccessResult.assembler?.DeleteOutput();
            batchFailResult.assembler?.DeleteOutput();
        }

        [UnitySetUp]
        public IEnumerator SetUp()
        {
            if (batchTask != null)
            {
                // wait for batch to finish first
                while (!batchTask.IsCompleted)
                {
                    yield return null;
                }
            }

            string className = GetClassName(TestContext.CurrentContext.Test.ClassName);
            string testName = TestContext.CurrentContext.Test.Name;


            if (batchSuccessResult.ContainsMethod(testName))
            {
                currentTestIsBatch = true;
                testResult = batchSuccessResult;
            }
            else if (batchFailResult.ContainsMethod(testName))
            {
                currentTestIsBatch = true;
                testResult = batchFailResult;
            }
            else
            {
                currentTestIsBatch = false;

                // not part of batch, build by itself
                Task<Result> task = BuildAndWeave(className, TestContext.CurrentContext.Test.Name);
                while (!task.IsCompleted)
                {
                    yield return null;
                }
                testResult = task.Result;
                testResult.AssertNoCompileErrors();
            }
        }

        [TearDown]
        public void TearDown()
        {
            if (!currentTestIsBatch)
            {
                testResult.assembler.DeleteOutput();
            }
        }

        [AssertionMethod]
        protected void IsSuccess()
        {
            Assert.That(Diagnostics, Is.Empty, $"Failed because there are Diagnostics messages: \n  {string.Join("\n  ", Diagnostics.Select(x => x.MessageData))}\n");
        }

        /// <summary>
        /// Like <see cref="IsSuccess"/> but doesn't fail if there are warnings
        /// </summary>
        [AssertionMethod]
        protected void NoErrors()
        {
            DiagnosticMessage[] errors = Diagnostics.Where(x => x.DiagnosticType == DiagnosticType.Error).ToArray();
            Assert.That(errors, Is.Empty, $"Failed because there are Error messages: \n  {string.Join("\n  ", errors.Select(d => d.MessageData))}\n");
        }

        [AssertionMethod]
        protected void HasErrorCount(int count)
        {
            string[] errorMessages = Diagnostics
                .Where(d => d.DiagnosticType == DiagnosticType.Error)
                .Select(d => d.MessageData).ToArray();

            Assert.That(errorMessages.Length, Is.EqualTo(count), $"Error messages: \n  {string.Join("\n  ", errorMessages)}\n");
        }

        [AssertionMethod]
        protected void HasError(string messsage, string atType)
        {
            string fullMessage = $"{messsage} (at {atType})";
            string[] errorMessages = Diagnostics
                .Where(d => d.DiagnosticType == DiagnosticType.Error)
                .Select(d => d.MessageData).ToArray();

            Assert.That(errorMessages, Contains.Item(fullMessage),
                $"Could not find error message in list\n" +
                $"  Message: \n    {fullMessage}\n" +
                $"  Errors: \n    {string.Join("\n    ", errorMessages)}\n"
                );
        }

        [AssertionMethod]
        protected void HasWarning(string messsage, string atType)
        {
            string fullMessage = $"{messsage} (at {atType})";
            string[] warningMessages = Diagnostics
                .Where(d => d.DiagnosticType == DiagnosticType.Warning)
                .Select(d => d.MessageData).ToArray();

            Assert.That(warningMessages, Contains.Item(fullMessage),
                $"Could not find warning message in list\n" +
                $"  Message: \n    {fullMessage}\n" +
                $"  Warings: \n    {string.Join("\n    ", warningMessages)}\n"
                );
        }

        static class TestBatcher
        {
            public static async Task<Result> RunBatch(string classFullName, Func<MethodInfo, bool> batchDeligate)
            {
                var type = Type.GetType(classFullName);
                // check we found the right type
                Debug.Assert(type.FullName == classFullName);
                Debug.Assert(type.IsSubclassOf(typeof(WeaverTestBase)));

                // tests must be public, so default flags are ok
                IEnumerable<MethodInfo> testMethods = type.GetMethods().Where(IsTest);
                int testMethodCount = testMethods.Count();
                IEnumerable<MethodInfo> methods = testMethods.Where(batchDeligate);

                Debug.Log($"Batching tests {methods.Count()} out of {testMethodCount} tests for {WeaverTestBase.GetClassName(classFullName)}");

                string[] names = methods.Select(x => x.Name).ToArray();
                if (names.Length == 0)
                    return default;

                string className = GetClassName(classFullName);
                Result result = await BuildAndWeaveBatch(className, names);

                // if there are no compile errors, then add tests to batchedTests
                // else, add none and run seperatly so that we know which one failed
                if (!result.assembler.CompilerErrors)
                {
                    result.methods = new HashSet<string>(names);
                }

                return result;
            }


            /// <summary>Checks if method has Test</summary>
            static bool IsTest(MethodInfo method)
            {
                return method.GetCustomAttribute<TestAttribute>() != null;
            }
        }

        protected struct Result
        {
            public readonly WeaverLogger weaverLog;
            public readonly AssemblyDefinition assembly;
            public readonly Assembler assembler;
            public HashSet<string> methods;

            public Result(WeaverLogger weaverLog, AssemblyDefinition assembly, Assembler assembler)
            {
                this.weaverLog = weaverLog;
                this.assembly = assembly;
                this.assembler = assembler;
                methods = null;
            }

            public bool ContainsMethod(string name)
            {
                if (methods == null)
                    return false;

                return methods.Contains(name);
            }

            /// <summary>
            /// Check that there are no c# compile errors
            /// </summary>
            [AssertionMethod]
            public void AssertNoCompileErrors()
            {
                Assert.That(assembler.CompilerErrors, Is.False);
                foreach (DiagnosticMessage error in weaverLog.Diagnostics)
                {
                    // ensure all errors have a location
                    Assert.That(error.MessageData, Does.Match(@"\(at .*\)$"));
                }
            }
        }
    }
}
