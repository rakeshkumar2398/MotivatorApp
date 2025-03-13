//import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,  // ✅ This replaces "env: { node: true }"
    },
    plugins: {},
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error",
    },
  },
];

