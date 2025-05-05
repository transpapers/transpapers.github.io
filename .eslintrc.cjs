module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    tsConfigRootDir: __dirname,
  },
  rules: {
    "no-prototype-builtins": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
  },
};
