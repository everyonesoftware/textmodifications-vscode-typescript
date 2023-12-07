import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
    files: 'outputs/tests/integration/**/*.js',
});
