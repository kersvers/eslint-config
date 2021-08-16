# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog], and this project
adheres to [Semantic Versioning][semver].


## [1.0.14] - 2021-08-16
### Added
- New rule [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md).
- New rule [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md).

### Security
- Updated dependencies.


## [1.0.13] - 2021-06-16
### Changed
- Use `consistent-as-needed` as default option for the `quote-props` rule.
- Use `allowAllPropertiesOnSameLine` for the `object-property-newline` rule.


## [1.0.12] - 2021-06-16
### Removed
- Disable the `@typescript-eslint/no-empty-interface` rule.


## [1.0.11] - 2021-06-16
### Security
- Updated dependencies.


## [1.0.10] - 2021-05-18
### Security
- Updated dependencies.


## [1.0.9] - 2021-02-01
### Added
- `postinstall` script to inform the user to install the `peerDependencies`.


## [1.0.8] - 2021-02-01
### Changed
- `peerDependencies` only include ESLint plugins now.


## [1.0.7] - 2021-02-01
### Changed
- Moved ESLint plugins from `dependencies` to `peerDependencies` due to a [limitation within ESLint](https://github.com/eslint/rfcs/pull/5).


## [1.0.6] - 2021-01-12
### Removed
- Disable the `@typescript-eslint/explicit-module-boundary-types` rule.


## [1.0.5] - 2021-01-12
### Changed
- Tweak the `@typescript-eslint/naming-convention` rule.


## [1.0.4] - 2021-01-12
### Changed
- Fix false positive errors for the `@typescript-eslint/no-unused-vars` rule.


## [1.0.3] - 2021-01-12
### Changed
- The `@typescript-eslint/camelcase` rule was deprecated and replaced in favor of the `@typescript-eslint/naming-convention` rule.


## [1.0.2] - 2021-01-08
### Security
- Updated dependencies.


## [1.0.1] - 2020-03-05
### Changed
- Disabled the `object-curly-newline` rule.
- Tweaked the `react/jsx-first-prop-new-line` and `react/sort-comp` rules.


## [1.0.0] - 2020-03-05
### Changed
- Switched to manually creating releases instead of having automatic patch
  releases for each change.



[1.0.14]: https://github.com/kersvers/eslint-config/compare/v1.0.13...v1.0.14
[1.0.13]: https://github.com/kersvers/eslint-config/compare/v1.0.12...v1.0.13
[1.0.12]: https://github.com/kersvers/eslint-config/compare/v1.0.11...v1.0.12
[1.0.11]: https://github.com/kersvers/eslint-config/compare/v1.0.10...v1.0.11
[1.0.10]: https://github.com/kersvers/eslint-config/compare/v1.0.9...v1.0.10
[1.0.9]: https://github.com/kersvers/eslint-config/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/kersvers/eslint-config/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/kersvers/eslint-config/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/kersvers/eslint-config/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/kersvers/eslint-config/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/kersvers/eslint-config/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/kersvers/eslint-config/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/kersvers/eslint-config/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/kersvers/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/kersvers/eslint-config/releases/tag/v1.0.0
[keep-a-changelog]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html
