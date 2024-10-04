module.exports = [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: require("@typescript-eslint/parser"),
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      ...require("eslint-plugin-prettier").configs.recommended.rules,
      ...require("@typescript-eslint/eslint-plugin").configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
];
