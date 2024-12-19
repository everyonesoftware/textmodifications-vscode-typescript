import { Iterable, Pre } from "@everyonesoftware/base-typescript";
import * as vscode from "vscode";
import { MutableTextEditorSelection } from "./mutableTextEditorSelection";

/**
 * An object that can be used to make changes to an open {@link vscode.TextEditor}.
 * @api https://code.visualstudio.com/api/references/vscode-api#TextEditor
 * @api https://code.visualstudio.com/api/references/vscode-api#TextEditorEdit
 */
export class MutableTextEditor
{
    private readonly editor: vscode.TextEditor;
    private readonly editBuilder: vscode.TextEditorEdit;

    private constructor(editor: vscode.TextEditor, editBuilder: vscode.TextEditorEdit)
    {
        Pre.condition.assertNotUndefinedAndNotNull(editor, "editor");
        Pre.condition.assertNotUndefinedAndNotNull(editBuilder, "editBuilder");

        this.editor = editor;
        this.editBuilder = editBuilder;
    }

    public static create(editor: vscode.TextEditor, editBuilder: vscode.TextEditorEdit): MutableTextEditor
    {
        return new MutableTextEditor(editor, editBuilder);
    }

    private getSelectionInner(selection: vscode.Selection): MutableTextEditorSelection
    {
        return MutableTextEditorSelection.create(selection, this.editor, this.editBuilder);
    }

    /**
     * Get the primary {@link MutableTextEditorSelection} on this
     * {@link MutableTextEditor}. Shorthand for `this.getSelections().first()`.
     * @api https://code.visualstudio.com/api/references/vscode-api#TextEditor
     * @api https://code.visualstudio.com/api/references/vscode-api#Selection
     */
    public getSelection(): MutableTextEditorSelection
    {
        return this.getSelectionInner(this.editor.selection);
    }

    /**
     * Get the {@link MutableTextEditorSelection}s in this
     * {@link MutableTextEditor}.
     * @api https://code.visualstudio.com/api/references/vscode-api#TextEditor
     * @api https://code.visualstudio.com/api/references/vscode-api#Selection
     */
    public getSelections(): Iterable<MutableTextEditorSelection>
    {
        return Iterable.create(this.editor.selections.map((selection: vscode.Selection) =>
        {
            return this.getSelectionInner(selection);
        }));
    }
}