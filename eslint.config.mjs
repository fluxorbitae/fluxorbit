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
  // ignore’lar
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

  // TS ve JS önerilen kurallar
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,

  // Proje kuralları
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false, // tsconfig'e bağlı kılmak istersen true yapıp tsconfig yolu ver
      },
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": a11y,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // genel
      "no-console": "warn",

      // react
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        { callbacksLast: true, shorthandFirst: true, reservedFirst: true }
      ],

      // hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",

      // a11y
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",

      // import/unused
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { args: "after-used", ignoreRestSiblings: false, argsIgnorePattern: "^_.*?$" }
      ],
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": "off",

      "import/order": [
        "warn",
        {
          groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [{ pattern: "~/**", group: "external", position: "after" }],
          "newlines-between": "always",
        },
      ],

      // biçim
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      ],
    },
  },
];
