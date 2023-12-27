module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-prototype-builtins': 'off',
  },
};
