'use strict';
/* eslint-disable max-len */
module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    // ESLint built-in rules
    // http://eslint.org/docs/rules
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'capitalized-comments': [
      'error',
      'always',
      {
        line: {
          // Ignore all lines that have less characters than 20 and all lines that
          // start with something that looks like a variable name or code.
          // eslint-disable-next-line max-len
          ignorePattern:
            '.{0,20}$|[a-z]+ ?[0-9A-Z_.(/=:[#-]|std|http|ssh|ftp|(let|var|const) [a-z_A-Z0-9]+ =|[b-z] |[a-z]*[0-9].* ',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
        },
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'constructor-super': 'error',
    /* The rule 'default-case-last' gives false-positive on JSDoc comment,
       so set to 'off'. */
    'default-case-last': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'getter-return': 'error',
    'indent': [
      'error',
      2,
      {
        ArrayExpression: 'first',
        CallExpression: { arguments: 'first' },
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        MemberExpression: 'off',
        ObjectExpression: 'first',
        SwitchCase: 1,
      },
    ],
    'key-spacing': ['error', { mode: 'strict' }],
    'keyword-spacing': 'error',
    'linebreak-style': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        ignorePattern: '^// Flags:',
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'new-parens': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { 'builtinGlobals': false }],
    'no-restricted-modules': ['error', 'sys'],
    /* eslint-disable max-len */
    'no-restricted-properties': [
      'error',
      {
        object: 'assert',
        property: 'deepEqual',
        message: 'Use `assert.deepStrictEqual()`.',
      },
      {
        object: 'assert',
        property: 'notDeepEqual',
        message: 'Use `assert.notDeepStrictEqual()`.',
      },
      {
        object: 'assert',
        property: 'equal',
        message: 'Use `assert.strictEqual()` rather than `assert.equal()`.',
      },
      {
        object: 'assert',
        property: 'notEqual',
        message:
          'Use `assert.notStrictEqual()` rather than `assert.notEqual()`.',
      },
      {
        property: '__defineGetter__',
        message: '__defineGetter__ is deprecated.',
      },
      {
        property: '__defineSetter__',
        message: '__defineSetter__ is deprecated.',
      },
    ],
    /* eslint-enable max-len */
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { args: 'none', caughtErrors: 'all' }],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        variables: false,
      },
    ],
    /* The rule 'no-useless-backreference' gives false-positive on JSDoc
       comment, so set to 'off'. */
    'no-useless-backreference': 'off',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': 'error',
    'operator-linebreak': ['error', 'after'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: 'function' },
    ],
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'consistent'],
    'rest-spread-spacing': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        'block': { 'balanced': true },
        'exceptions': ['-'],
      },
    ],
    'strict': 0,
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'parser': '@typescript-eslint/parser',
      'rules': {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            'allowExpressions': true
          }
        ],
        'strict': 0,
      }
    }
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
