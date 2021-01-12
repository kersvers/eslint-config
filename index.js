module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false
    },
    env: {
        es6: true
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'unicorn'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/array-type': ['error', {
            default: 'array'
        }],
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/naming-convention': ['error', {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        }, {
            selector: 'typeLike',
            format: ['PascalCase']
        }],
        '@typescript-eslint/no-empty-interface': ['error', {
            allowSingleExtends: true
        }],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            ignoreRestSiblings: true
        }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'block-spacing': ['error', 'always'],
        'brace-style': 'off',
        camelcase: 'off',
        'capitalized-comments': ['error', 'always', {
            ignoreConsecutiveComments: true,
            ignoreInlineComments: true
        }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'dot-notation': 'error',
        'eol-last': ['error', 'always'],
        eqeqeq: ['error', 'always'],
        'func-call-spacing': 'off',
        'func-style': ['error', 'expression'],
        'id-blacklist': ['error', 'e', 'err', 'evt', 'cb'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'import/export': 'error',
        'import/no-namespace': 'error',
        'import/newline-after-import': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        indent: 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true
        }],
        'no-console': ['error', {
            allow: ['warn', 'error']
        }],
        'no-duplicate-imports': 'error',
        'no-else-return': ['error', {
            allowElseIf: false
        }],
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-restricted-imports': ['error', {
            name: 'lodash',
            message: 'Please use lodash-es instead to reduce bundle size.'
        }],
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unused-vars': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'off',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'error',
        'object-shorthand': ['error', 'properties', {
            avoidQuotes: true
        }],
        'padding-line-between-statements': ['error', {
            blankLine: 'always',
            prev: '*',
            next: 'return'
        }, {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*'
        }, {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var']
        }],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        quotes: 'off',
        'quote-props': ['error', 'as-needed'],
        'rest-spread-spacing': 'error',
        'require-await': 'error',
        semi: 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'unicorn/catch-error-name': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/import-index': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/regex-shorthand': 'error',
        yoda: 'error'
    }
};
