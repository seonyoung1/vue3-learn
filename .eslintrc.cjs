/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module'
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 4,
        trailingComma: 'all',
        printWidth: 150,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto', // 한줄 추가
      },
    ],
  },
}
