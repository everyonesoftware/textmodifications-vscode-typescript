import { defineConfig } from '@vscode/test-cli';

function generateConfiguration(versionString)
{
    return {
        label: `Integration tests - ${versionString}`,
        files: "outputs/tests/integration/**/*.js",
        version: versionString,
        srcDir: "sources"
    };
}

export default defineConfig([
    // generateConfiguration("1.83.0"),

    generateConfiguration("1.85.2"),

    // generateConfiguration("1.86.0"),
    // Error: Illegal argument: TextEditor(vs.editor.ICodeEditor:1,$model4)
    //   at b (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:11:1101)
    //   at u.$tryApplyEdits (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:2184:16347)
    //   at m.S (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1590:13967)    
    //   at m.Q (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1590:13733)    
    //   at m.M (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1590:12826)    
    //   at m.L (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1590:11905)    
    //   at a.value (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1590:10692)
    //   at o.y (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:87:1902)       
    //   at o.fire (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:87:2119)    
    //   at s.fire (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:628:14470)  
    //   at x.onmessage (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.86.0/resources/app/out/vs/workbench/workbench.desktop.main.js:1662:7751)

    // generateConfiguration("1.89.1"),
    // Error: Illegal argument: TextEditor(vs.editor.ICodeEditor:1,$model4)
    //   at b (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:11:1029)
    //   at f.$tryApplyEdits (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:2148:16398)
    //   at h.S (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1630:13952)    
    //   at h.Q (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1630:13718)    
    //   at h.M (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1630:12811)    
    //   at h.L (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1630:11890)    
    //   at d.value (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1630:10677)
    //   at s.y (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:89:659)        
    //   at s.fire (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:89:876)     
    //   at r.fire (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:629:14507)  
    //   at H.onmessage (vscode-file://vscode-app/c:/Users/dansc/Sources/text-vscode-typescript/.vscode-test/vscode-win32-x64-archive-1.89.1/resources/app/out/vs/workbench/workbench.desktop.main.js:1648:8048)

    // generateConfiguration("1.96.1"),

    // generateConfiguration("stable"), // 1.96.1
]);
