import { Pre } from "@everyonesoftware/base-typescript";

import * as vscode from "vscode";

import { MutableTextEditor } from "./mutableTextEditor";

/**
 * A type that can be used to interact with a {@link vscode.TextEditor}.
 * @api https://code.visualstudio.com/api/references/vscode-api#TextEditor
 */
export class TextEditor
{
    private readonly editor: vscode.TextEditor;

    private constructor(editor: vscode.TextEditor)
    {
        Pre.condition.assertNotUndefinedAndNotNull(editor, "editor");

        this.editor = editor;
    }

    public static create(editor: vscode.TextEditor): TextEditor
    {
        return new TextEditor(editor);
    }

    /**
     * Perform an edit on the {@link vscode.TextDocument} associated with this
     * {@link vscode.TextEditor}. The given callback-function is invoked with an
     * {@link vscode.TextEditorEdit} which must be used to make edits. Note that the
     * {@link vscode.TextEditorEdit} is only valid while the callback executes.
     * @param editFunction The function that will be used to make changes to the
     * {@link vscode.TextDocument}.
     * @param options The undo/redo behavior around this edit. By default, undo stops
     * will be created before and after this edit.
     * @returns A {@link Thenable} that resolves with a value indicating if the edits
     * could be applied.
     */
    public edit(editFunction: (mutableEditor: MutableTextEditor) => void, options?: {undoStopAfter: boolean, undoStopBefore: boolean}): Thenable<boolean>
    {
        Pre.condition.assertNotUndefinedAndNotNull(editFunction, "editFunction");

        return this.editor.edit((editBuilder: vscode.TextEditorEdit) =>
        {
            editFunction(MutableTextEditor.create(this.editor, editBuilder));
        }, options);
    }
}