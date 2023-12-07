import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
    files: 'outputs/integration-tests/**/*.js',
});
