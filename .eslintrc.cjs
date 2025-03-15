export default {
    env: {
      browser: true,
      es2021: true,
      node: true,     // 添加这个，解决 module 未定义问题
      jest: true      // 解决 jest, test, expect 未定义问题
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      'react'
    ],
    rules: {
      'react/prop-types': 'off',    // 禁用 prop-types 检查
      'no-unused-vars': 'warn'      // 将未使用变量降级为警告而非错误
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
};