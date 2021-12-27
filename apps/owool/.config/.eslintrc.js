const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // use 'plugin:vue/vue3-essential' for less strict linting rules - https://eslint.vuejs.org/rules
  ],
  plugins: [
    'vue'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },
  globals: {
    Shopify: 'readonly'
  },
  ignorePatterns: [
    /**
     * ignore certain files
     * docs: https://eslint.org/docs/user-guide/configuring#ignorepatterns-in-config-files
     */
    // 'my-file.js',
    // '**/my-directory/*.js'
  ],
  rules: {
    /**
     * add custom rules
     * docs: https://eslint.org/docs/rules
     */
    'vue/no-deprecated-filter':'off',
    'vue/no-unused-vars':'off',
    'vue/no-deprecated-slot-scope-attribute':'off',
    'no-unused-vars': isDevelopment ? 'off' : 'error',
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'never']
  }
}
