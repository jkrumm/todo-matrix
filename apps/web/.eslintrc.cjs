const projectConfig = require("@todo-matrix/config/eslint/astro-eslint.js");

module.exports = {
  ...projectConfig,
  ignorePatterns: ["node_modules/", "dist/"],
  parserOptions: {
    ...projectConfig.parserOptions,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
}