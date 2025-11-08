// eslint.config.mjs
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import a11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "public/**",
      "**/*.css",
      "**/.DS_Store",
      ".now/**",
      "esm/**",
      "tests/**",
      "scripts/**",
    ],
  },

  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": a11y,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "unused-imports/no-unused-imports": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-console": "warn",
    },
  },
];
