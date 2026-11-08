export default [
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Add your custom rules here, e.g.:
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  }
];
