module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'prettier',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    indent: 0,
    camelcase: 0,
    'comma-dangle': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
