import { Pre, isString } from '@everyonesoftware/base-typescript';
import * as vscode from 'vscode';
import { TextEditor } from './textEditor';

/**
 * A type that encapsulates the APIs provided by the VS Code process.
 */
export class VsCodeProcess
{
    private readonly context: vscode.ExtensionContext;

    private constructor(context: vscode.ExtensionContext)
    {
        Pre.condition.assertNotUndefinedAndNotNull(context, "context");

        this.context = context;
    }

    public static create(context: vscode.ExtensionContext): VsCodeProcess
    {
        return new VsCodeProcess(context);
    }

    /**
     * Registers a command that can be invoked via a keyboard shortcut, a menu item, an
     * action, or directly.
     * @param command A unique identifier for the command.
     * @param callback A command handler function. This can be either a synchronous or
     * asynchronous function.
     * @param autoDispose Whether the registered command will be automatically added to
     * the context's subscriptions. This value defaults to true.
     * @param thisArg The `this` context used when invoking the handler function.
     * @returns A {@link vscode.Disposable} which unregisters this command on disposal.
     * @api https://code.visualstudio.com/api/references/vscode-api#commands
     */
    public registerCommand(command: string, callback: (args: any[]) => any, autoDispose?: boolean, thisArg?: any): vscode.Disposable;
    /**
     * Registers a command that can be invoked via a keyboard shortcut, a menu item, an
     * action, or directly.
     * @param command A unique identifier for the command.
     * @param callback A command handler function. This can be either a synchronous or
     * asynchronous function.
     * @param autoDispose Whether the registered command will be automatically added to
     * the context's subscriptions. This value defaults to true.
     * @param thisArg The `this` context used when invoking the handler function.
     * @returns A {@link vscode.Disposable} which unregisters this command on disposal.
     * @api https://code.visualstudio.com/api/references/vscode-api#commands
     */
    public registerCommand(options: { command: string, callback: (args: any[]) => any, autoDispose?: boolean, thisArg?: any }): vscode.Disposable;
    registerCommand(commandOrOptions: string | { command: string, callback: (args: any[]) => any, autoDispose?: boolean, thisArg?: any }, callback?: (args: any[]) => any, autoDispose?: boolean, thisArg?: any): vscode.Disposable
    {
        let command: string;
        if (isString(commandOrOptions))
        {
            command = commandOrOptions;
        }
        else
        {
            command = commandOrOptions.command;
            callback = commandOrOptions.callback;
            thisArg = commandOrOptions.thisArg;
            autoDispose = commandOrOptions.autoDispose;
        }
        Pre.condition.assertNotEmpty(command, "command");
        Pre.condition.assertNotUndefinedAndNotNull(callback, "callback");

        if (autoDispose === undefined)
        {
            autoDispose = true;
        }
        const result: vscode.Disposable = vscode.commands.registerCommand(command, callback, thisArg);
        if (autoDispose === true)
        {
            this.context.subscriptions.push(result);
        }

        return result;
    }

    /**
     * The currently active editor or `undefined`. The active editor is the one that
     * currently has focus or, when none has focus, the one that has changed input most
     * recently.
     * @api https://code.visualstudio.com/api/references/vscode-api#window
     */
    public getActiveTextEditor(): TextEditor | undefined
    {
        const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
        return editor === undefined ? undefined : TextEditor.create(editor);
    }
}