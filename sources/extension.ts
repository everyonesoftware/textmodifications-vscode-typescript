import * as vscode from 'vscode';
import { toCamelCase, toKebabCase, toLowercase, toPascalCase, toSnakeCase, toUpperKebabCase, toUpperSnakeCase, toUppercase } from './text';

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

    context.subscriptions.push(
        vscode.commands.registerCommand(toLowercaseCommandId, () =>
        {
            return applyModificationToSelection(toLowercase);
        }),
        vscode.commands.registerCommand(toUppercaseCommandId, () =>
        {
            return applyModificationToSelection(toUppercase);
        }),
        vscode.commands.registerCommand(toCamelCaseCommandId, () =>
        {
            return applyModificationToSelection(toCamelCase);
        }),
        vscode.commands.registerCommand(toPascalCaseCommandId, () =>
        {
            return applyModificationToSelection(toPascalCase);
        }),
        vscode.commands.registerCommand(toSnakeCaseCommandId, () =>
        {
            return applyModificationToSelection(toSnakeCase);
        }),
        vscode.commands.registerCommand(toUpperSnakeCaseCommandId, () =>
        {
            return applyModificationToSelection(toUpperSnakeCase);
        }),
        vscode.commands.registerCommand(toKebabCaseCommandId, () =>
        {
            return applyModificationToSelection(toKebabCase);
        }),
        vscode.commands.registerCommand(toUpperKebabCaseCommandId, () =>
        {
            return applyModificationToSelection(toUpperKebabCase);
        }));
}

export function deactivate(): void
{
}
