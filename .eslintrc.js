module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
    semi: 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
