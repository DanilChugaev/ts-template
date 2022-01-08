module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'codex/ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
};