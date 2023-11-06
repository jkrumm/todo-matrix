const projectConfig = require("@todo-matrix/config/react-eslint.js");

module.exports = {
  ...projectConfig,
  ignorePatterns: ["node_modules/", ".eslintrc.js"],
  parserOptions: {
    ...projectConfig.parserOptions,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
