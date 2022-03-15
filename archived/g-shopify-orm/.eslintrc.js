module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    'vue/no-reserved-keys':'off',
    "vue/multi-word-component-names": "off",
    'vue/no-unused-components': process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/no-unused-vars': process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-this-alias":'off',
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
