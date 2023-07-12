## Changelog

### Version 5.0.1 (2022-04-12)

Create React App 5.0.1 is a maintenance release that improves compatibility with React 18. It also updates templates to use `createRoot` and relaxes the check for older versions of Create React App.

#### Migrating from 5.0.0 to 5.0.1

To migrate from version 5.0.0 to 5.0.1, run the following command inside your project folder:

```
npm install --save --save-exact react-scripts@5.0.1
```

or

```
yarn add --exact react-scripts@5.0.1
```

#### 🐛Bug Fixes

- Fixed an issue with webpack noise being printed only if there was an error or warning.
- Added a warning when not using the latest version of Create React App but without exiting.
- Ensured posix compliant joins for URLs in middleware.

#### 💅Enhancements

- Updated templates to use React 18's `createRoot` method.
- Upgraded the version of RTL (React Testing Library) to support React 18.
- Updated deprecated rules in ESLint configuration.

#### 📝Documentation

- Fixed a typo in the deployment.md file.
- Added the Changelog for version 5.0.0.
- Prevented both npm and yarn commands from being copied in the documentation.

#### 🏠Internal

- Ignored the docs folder when publishing.

### Version 5.0.0 (2021-12-14)

Create React App 5.0.0 is a major release that introduces several new features and upgrades all major dependencies. Here are the highlights:

- Webpack 5
- Jest 27
- ESLint 8
- PostCSS 8
- Fast Refresh improvements and bug fixes
- Support for Tailwind CSS
- Improved package manager detection
- Unpinned all dependencies for better compatibility with other tools
- Dropped support for Node 10 and 12

#### Migrating from 4.0.x to 5.0.0

To migrate from version 4.0.x to 5.0.0, run the following command inside your project folder:

```
npm install --save --save-exact react-scripts@5.0.0
```

or

```
yarn add --exact react-scripts@5.0.0
```

**Note: If you encounter errors after upgrading, you may need to delete your `node_modules` folder and reinstall your dependencies by running `npm install` or `yarn`.**

#### 💥Breaking Changes

- Dropped support for Node 10 and 12.

#### Full Changelog

For a complete list of changes, bug fixes, enhancements, and more, please refer to the full [changelog](https://github.com/CodeMastermindHQ/CodeMastermindHQ/blob/main/CHANGELOG.md) on our GitHub repository.
