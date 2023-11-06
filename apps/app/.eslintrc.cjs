const projectConfig = require("@todo-matrix/config/eslint/react-eslint.js");

module.exports = {
    ...projectConfig,
    ignorePatterns: ["node_modules/", "dist/", "vite.config.ts"],
    parserOptions: {
        ...projectConfig.parserOptions,
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
    },
}