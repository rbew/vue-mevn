module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
  rules: {
    'vue/require-default-prop': 'off',
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
