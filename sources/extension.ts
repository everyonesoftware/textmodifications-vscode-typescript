import { toCamelCase, toKebabCase, toLowercase, toPascalCase, toSnakeCase, toUpperKebabCase, toUpperSnakeCase, toUppercase } from "@everyonesoftware/base-typescript";

import * as vscode from 'vscode';

import { VsCodeProcess } from './vsCodeProcess';
import { TextEditor } from './textEditor';
import { MutableTextEditor } from './mutableTextEditor';

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
    const process: VsCodeProcess = VsCodeProcess.create(context);

    function registerSelectionCommand(commandId: string, modification: (value: string) => string): void
    {
        process.registerCommand(commandId, async () =>
        {
            const editor: TextEditor | undefined = process.getActiveTextEditor();
            if (editor !== undefined)
            {
                await editor.edit((mutableEditor: MutableTextEditor) =>
                {
                    for (const mutableSelection of mutableEditor.getSelections())
                    {
                        mutableSelection.setText(modification(mutableSelection.getText()));
                    }
                });
            }
        });
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
