module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'testing-library',
    'unicorn',
    'promise',
    'sonarjs',
    'prettier',
    '@emotion',
    'chakra-ui',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules', 'build', '*-build', '*.json'],
  rules: {
    /**
     * eslint
     **/
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-shadow': 'warn',
    'ignored-by-default': 'off',
    eqeqeq: 'error',
    /**
     * @typescript-eslint
     **/
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    /**
     * eslint-plugin-react
     **/
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    // TODO: re-enable when migration complete
    'react/jsx-no-undef': 'off',
    /**
     * eslint-plugin-unicorn
     **/
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [
          // ignore files that use acronyms in name, ie. "useENSName", "OverviewForDAO"
          '^[a-z]+[A-Z]+[a-z]*..*$',
          '(^[A-Z][a-z]+[A-Za-z]*[A-Z]+..*$)|(^[A-Z]+[a-z]+[A-Z][a-z]*..*$)',
        ],
      },
    ],
    'unicorn/import-style': 'off',
    /**
     * eslint-plugin-promise
     **/
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    /**
     * eslint-plugin-sonarjs
     **/
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'off',
    /**
     * eslint-plugin-prettier
     **/
    'prettier/prettier': [
      'error',
      {
        plugins: [require('@trivago/prettier-plugin-sort-imports')],
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid',
        importOrder: ['^[./]'],
        importOrderSeparation: true,
      },
    ],
    '@emotion/syntax-preference': ['error', 'object'],
    'import/no-cycle': ['error', { ignoreExternal: true }],
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': ['error', { noShorthand: true }],
  },
};
