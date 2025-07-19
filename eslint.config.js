import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      import: pluginImport,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      // Import plugin rules
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-duplicates": "error",

      // React hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility rules
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      // Add more accessibility rules as needed
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: resolve(__dirname, "./tsconfig.json"),
        },
      },
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  {
    files: ["**/*.test.{js,ts,jsx,tsx}"],
    extends: ["plugin:testing-library/react"],
    rules: {
      // Add specific rules for testing
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: ["plugin:@typescript-eslint/recommended"],
    parserOptions: {
      project: resolve(__dirname, "./tsconfig.json"),
    },
    rules: {
      // TypeScript specific rules if needed
    },
  },
];
