/** @type {import('eslint').Linter.Config} */
module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react'
    ],
    extends: [
        'plugin:react/recommended'
    ],
    rules: {
        'react/button-has-type': 'error',
        'react/destructuring-assignment': ['warn', 'always'],
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-spacing': ['error', {
            when: 'never'
        }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-curly-brace-presence': ['error', {
            props: 'never',
            children: 'never'
        }],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }],
        'react/no-access-state-in-setstate': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', {
            ignoreStateless: true
        }],
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': ['error', {
            ignorePureComponents: true
        }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': ['error', {
            order: [
                'instance-variables',
                'static-variables',
                '/^.+Ref$/',
                'static-methods',
                'lifecycle',
                '/^fetch.+$/',
                '/^handle.+$/',
                'everything-else',
                'rendering'
            ],
            groups: {
                rendering: [
                    'render',
                    '/^render.+$/'
                ]
            }
        }],
        'react/state-in-constructor': ['error', 'never']
    }
};
