import * as assert from 'assert';

import * as vscode from 'vscode';
import * as extension from "../../sources/extension"

suite("Integration Tests", () => {
    test("execute non-existing command", async () =>
    {
        assert.rejects(async () => await vscode.commands.executeCommand("i.dont.exist"), 
            new Error("command 'i.dont.exist' not found"));
    });

    test("execute command when no editor is active", async () =>
    {
        assert.strictEqual(vscode.window.activeTextEditor, undefined);

        const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
        assert.strictEqual(executeCommandResult, undefined);
    });

    test("execute command when no selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "Hello world!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toLowerCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "HELLO WORLD!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toLowercaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HEllo worLD!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toUpperCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUppercaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HeLLO WORld!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toCamelCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toCamelCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HelloWorld!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toPascalCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toPascalCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HeLloWorld!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toSnakeCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toSnakeCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "Hello_world!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toUpperSnakeCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUpperSnakeCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HeLLO_WORld!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toKebabCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toKebabCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "Hello-world!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });

    test("execute toUpperKebabCase when a selection exists", async () =>
    {
        await vscode.commands.executeCommand("vscode.openWith", vscode.Uri.parse("untitled:NewDocument"), "default");
        const activeTab: vscode.Tab | undefined = vscode.window.tabGroups.activeTabGroup.activeTab;
        assert.notStrictEqual(activeTab, undefined);
        try
        {
            const textEditor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            assert.notStrictEqual(textEditor, undefined);
            await textEditor!.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.insert(new vscode.Position(0, 0), "Hello world!");
            });

            textEditor!.selection = new vscode.Selection(0, 2, 0, 9);

            const executeCommandResult: unknown = await vscode.commands.executeCommand(extension.toUpperKebabCaseCommandId);
            assert.strictEqual(executeCommandResult, undefined);

            assert.strictEqual(textEditor!.document.getText(), "HeLLO-WORld!");
        }
        finally
        {
            vscode.window.tabGroups.close(activeTab!);
        }
    });
});
