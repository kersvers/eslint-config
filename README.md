# Kersvers ESLint Configuration
Generic base configuration for [ESLint][eslint] supporting setups using
[TypeScript][typescript] and [React][react].


## Available configurations
The following configurations are available and can be extended in a
project-specific ESLint configuration. Note that it's possible to mix and match
configurations.

- [`@kersvers/eslint-config`](./index.js)  
  Base configuration for TypeScript projects.
- [`@kersvers/eslint-config/react`](./react.js)  
  Additional configuration and rules for projects using [React][react] and JSX
  targeting browser environments.


## Usage
### Installation
Install the package and the `eslint` dependency using the following command.

```shell
$ npm install --save-dev kersvers/eslint-config eslint
```

### Extending
Use the [`extends`][eslint-extends] feature provided by ESLint in the
project-specific `.eslintrc` configuration file.

```json
{
    "extends": [
        "@kersvers/eslint-config",
        "@kersvers/eslint-config/react"
    ]
}
```

### Scripts
The following scripts can be added to `package.json` to make it easier to start
the linter.

```json
{
    "scripts": {
        "lint:js": "eslint \"src/**/*.{ts,tsx}\" \"*.js\"",
        "lint:fix": "npm run lint:js -- --fix"
    }
}
```



[eslint]: https://eslint.org/
[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[eslint-extends]: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
