import * as vscode from 'vscode';
import { toCamelCase, toKebabCase, toLowercase, toPascalCase, toSnakeCase, toUpperKebabCase, toUpperSnakeCase, toUppercase } from "@everyonesoftware/base-typescript";

export const toLowercaseCommandId: string = "textmodifications-vscode.toLowercase";
export const toUppercaseCommandId: string = "textmodifications-vscode.toUppercase";
export const toCamelCaseCommandId: string = "textmodifications-vscode.toCamelCase";
export const toPascalCaseCommandId: string = "textmodifications-vscode.toPascalCase";
export const toSnakeCaseCommandId: string = "textmodifications-vscode.toSnakeCase";
export const toUpperSnakeCaseCommandId: string = "textmodifications-vscode.toUpperSnakeCase";
export const toKebabCaseCommandId: string = "textmodifications-vscode.toKebabCase";
export const toUpperKebabCaseCommandId: string = "textmodifications-vscode.toUpperKebabCase";

export function activate(context: vscode.ExtensionContext): void
{
    async function registerSelectionCommand(commandId: string, modification: (value: string) => string): Promise<void>
    {
        context.subscriptions.push(vscode.commands.registerCommand(commandId, async () =>
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
        }));
    }

    registerSelectionCommand(toLowercaseCommandId, toLowercase);
    registerSelectionCommand(toUppercaseCommandId, toUppercase);
    registerSelectionCommand(toCamelCaseCommandId, toCamelCase);
    registerSelectionCommand(toPascalCaseCommandId, toPascalCase);
    registerSelectionCommand(toSnakeCaseCommandId, toSnakeCase);
    registerSelectionCommand(toUpperSnakeCaseCommandId, toUpperSnakeCase);
    registerSelectionCommand(toKebabCaseCommandId, toKebabCase);
    registerSelectionCommand(toUpperKebabCaseCommandId, toUpperKebabCase);
}

export function deactivate(): void
{
}
