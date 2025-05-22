import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node // Добавляем глобалы Node.js
      }
    },
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single']
    }
  }
]