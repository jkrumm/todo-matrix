module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier", // make sure "prettier" is last in the list
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "react/react-in-jsx-scope": "off", // you don't need to import React with React 17+
    "react-hooks/rules-of-hooks": "error", // checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // checks effect dependencies
    "@typescript-eslint/explicit-function-return-type": "warn", // consider using explicit function return types
    "jsx-a11y/accessible-emoji": "warn", // warn about accessibility with emojis
    // add other custom rules here
  },
  settings: {
    react: {
      version: "detect", // tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
