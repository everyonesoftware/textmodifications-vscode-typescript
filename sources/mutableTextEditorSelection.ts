import { Pre } from "@everyonesoftware/base-typescript";

import * as vscode from "vscode";

/**
 * A type that encapsulates a {@link vscode.Selection}, the {@link vscode.TextEditor}
 * it is connected to, and the {@link vscode.TextEditorEdit} that can be used to modify
 * the {@link vscode.TextEditor}.
 */
export class MutableTextEditorSelection
{
    private readonly selection: vscode.Selection;
    private readonly editor: vscode.TextEditor;
    private readonly editBuilder: vscode.TextEditorEdit;

    private constructor(selection: vscode.Selection, editor: vscode.TextEditor, editBuilder: vscode.TextEditorEdit)
    {
        Pre.condition.assertNotUndefinedAndNotNull(selection, "selection");
        Pre.condition.assertNotUndefinedAndNotNull(editor, "editor");
        Pre.condition.assertNotUndefinedAndNotNull(editBuilder, "editBuilder");

        this.selection = selection;
        this.editor = editor;
        this.editBuilder = editBuilder;
    }

    public static create(selection: vscode.Selection, editor: vscode.TextEditor, editBuilder: vscode.TextEditorEdit): MutableTextEditorSelection
    {
        return new MutableTextEditorSelection(selection, editor, editBuilder);
    }

    /**
     * Get the text that is contained by this {@link MutableTextEditorSelection}.
     */
    public getText(): string
    {
        return this.editor.document.getText(this.selection);
    }

    /**
     * Replace the text that is contained by this
     * {@link MutableTextEditorSelection} with the provided text.
     * @param text The new text for this {@link MutableTextEditorSelection}.
     * @api https://code.visualstudio.com/api/references/vscode-api#TextEditorEdit
     */
    public setText(text: string): void
    {
        this.editBuilder.replace(this.selection, text);
    }
}