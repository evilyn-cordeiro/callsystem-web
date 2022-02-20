module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
