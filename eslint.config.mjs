import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    plugins: {
      extends: ['airbnb-base/legacy'],
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
  },
];