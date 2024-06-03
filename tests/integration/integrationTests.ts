import { Test, TestRunner } from "@everyonesoftware/test-typescript";
import { MochaTestRunner } from "@everyonesoftware/mocha-typescript";
import * as vscode from "vscode";

import * as extension from "../../sources/extension";

export function test(runner: TestRunner): void
{
    runner.testGroup("Integration Tests", () =>
    {
        runner.testAsync("execute non-existing command", async (test: Test) =>
        {
            await test.assertThrowsAsync(async () => await vscode.commands.executeCommand("i.dont.exist"), 
                new Error("command 'i.dont.exist' not found"));
        });

        runner.testAsync("execute command when no editor is active", async (test: Test) =>
        {
            test.assertUndefined(vscode.window.activeTextEditor);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
            test.assertUndefined(executeCommandResult);
        });

        runner.testAsync("execute command when no selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "Hello world!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toLowerCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "HELLO WORLD!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HEllo worLD!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toUpperCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUppercaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HeLLO WORld!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toCamelCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toCamelCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HelloWorld!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toPascalCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toPascalCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HeLloWorld!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toSnakeCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toSnakeCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "Hello_world!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toUpperSnakeCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUpperSnakeCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HeLLO_WORld!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toKebabCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toKebabCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "Hello-world!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });

        runner.testAsync("execute toUpperKebabCase when a selection exists", async (test: Test) =>
        {
            await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
            const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
            test.assertNotUndefinedAndNotNull(activeTab);
            try
            {
                const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
                test.assertNotUndefinedAndNotNull(textEditor);
                await textEditor.edit((editBuilder: vscode.TextEditorEdit) =>
                {
                    editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
                });

                textEditor.selection = new vscode.Selection(0, 2, 0, 9);

                const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUpperKebabCaseCommandId);
                test.assertUndefined(executeCommandResult);

                test.assertEqual(textEditor.document.getText(), "HeLLO-WORld!");
            }
            finally
            {
                vscode.window.tabGroups.close(activeTab);
            }
        });
    });
}
test(MochaTestRunner.create());