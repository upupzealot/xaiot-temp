module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'global-require': 0,
  },
  ignorePatterns: [
    '/src/components-shared/form-render.vue',
    '/src/components-shared/form-items',
  ],
};
