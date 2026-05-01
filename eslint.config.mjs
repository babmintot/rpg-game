import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        browser: 'readonly',
        // ִכÿ Node.js פאיכמג (webpack.config.js):
        node: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        exports: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**']
  }
];