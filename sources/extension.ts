import * as vscode from 'vscode';

import * as text from "./text";

export function activate(context: vscode.ExtensionContext): void
{
    async function applyModificationToSelection(modification: (value: string) => string): Promise<void>
    {
        const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
        if (editor !== undefined)
        {
            await editor.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                const document: vscode.TextDocument = editor.document;
                for (const selection of editor.selections)
                {
                    const selectionText: string = document.getText(selection);
                    const modifiedText: string = modification(selectionText);
                    editBuilder.replace(selection, modifiedText);
                }
            });
        }
    }

    context.subscriptions.push(vscode.commands.registerCommand("textmodifications-vscode.toLowercase", () =>
    {
        return applyModificationToSelection(text.toLowercase);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("textmodifications-vscode.toUppercase", () =>
    {
        return applyModificationToSelection(text.toUppercase);
    }));
}

export function deactivate(): void
{
}
