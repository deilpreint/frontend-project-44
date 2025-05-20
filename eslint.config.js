import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    rules: {
      'semi': 'off',
      'quotes': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off'
    }
  }
]