module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // import引入报错解决
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off'
  }
}
