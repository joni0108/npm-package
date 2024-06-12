<h1 align="center">Npm Package Template</h1>
<p align="center">Boilerplate done with typescript.</p>

<p align="center">
  <a aria-label="NPM Version" href="https://www.npmjs.com/package/@codixfy/gemini?activeTab=readme">
    <img alt="" src="https://img.shields.io/npm/v/%40codixfy%2Fgemini?label=NPM&logo=npm&style=for-the-badge&color=0470FF&logoColor=white">
  </a>
  <a aria-label="Test Passing Statust" href="https://www.npmjs.com/package/@codixfy/gemini?activeTab=readme">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/joni0108/t-npm-package/test.yml?style=for-the-badge&logo=vitest&logoColor=white&label=TESTS">
  </a>
  <a aria-label="Bundle Size" href="https://www.npmjs.com/package/@codixfy/gemini?activeTab=readme">
    <img alt="" src="https://img.shields.io/bundlephobia/minzip/%40codixfy%2Fgemini?style=for-the-badge&color=B3CAFF">
  </a>
</p>
<p align="center">
  <a href="https://github.com/joni0108/t-npm-package?tab=readme-ov-file#documentation">Docs</a> | 
  <a href="https://github.com/joni0108/t-npm-package">GitHub</a> | 
  <a href="https://github.com/joni0108/t-npm-package/issues">Issues</a>
</p>

## Features

- 🤖 **Automated**: With workflows ready to test, format, lint, and even deploy your project. Also includes husky for making sure the code is ready, even before the commit.
- 🛡️ **Safe Coding**: Coded in typescript, tested with vitest, and formatted & linted with biome, you have everything you need to acomplish a safe codebase.
- 🧐 **Rich Package**: Counts with an extensive package.json, to add as much information as needed to your project and future users.
- 🛹 **Ready to go**: It counts with README templates (like this), contributing template, code license file, and pre-configured `commands`.

## Why This Template

> Why should I use this instead of creating my own?

It's just about saving time, you have all the initial things your project needs with just a couple of clicks instead of spend hours making everything ready.

<details>
<summary>Just see what are saving time on:</summary>

<br>

1. Project initialization:

```bash
npm init -y
```

2. Dependencies Installation:

```bash
npm i typescript vitest @vitest/coverage-v8 @biomejs/biome tsup husky
```

3. Package.json configuration

- Add all the keys and its values
- Add all the scripts

4. Generate and configurate the `tsconfig.json` file
5. Generate and configurate the `tsup.config.ts` file
6. Generate and configurate the `biome.json` file
7. Configuration of other core files like `.gitignore`, `.npmignore`.
8. Code of the `github workflows` files.
9. Creation of CHANGELOG, and both readme files.

And the list goes on...

</details>

## Docs
### Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Testing the Setup](#testing)
- After Coding -> Check last section

## Installation

1. Fork the repository, so you can create a repository from that template.
2. Clone your new repository (or download the files)
```bash
git clone <url>
```

3. Enter the folder with the repository.
```bash
cd <name>
```

4. Open it with Visual Studio Code or your code favorite code editor.
5. Install all packages by running `npm install` on the terminal

## Configuration

1. Go to the `package.json` and change all the informational keys to meet your project information.
2. Run `npx husky init` to initialize husky.
3. You are all set.

## Testing
In order to know if you have setted up the project correctly, please, run the following commands to see if there's not any error.

```bash
npm run test
```

It should run all tests and return no errors.

```bash
npm run lint
```

It should not return any lint issue.

```bash
npm run build
```

If all of them were successful, now you can start coding, but before that, let's remove the testing example.

### Removing testing dependency
1. Run the following command to uninstall the demo greet package.
```bash
npm run init
```

2. Delete the `dist` folder, the `./tests/core.test.ts` file, and the content of `./src/core.core.ts` file.

## After coding, ready to publish/push
Remember, `<root>/README.md` file is the one shown on NPM, and `<root>/.github/READMEmd` is the one shown at github, so modify them wisely.

### Pre-Configured Scripts

| Npm run script | What does it do? | 
| --- | --- |
| `build` | Builds the project using tsup. |
| `test` | Runs all the test suits using vitest. |
| `test:watch` | Runs all the test, watching for changes. |
| `test:coverage` | Runs a coverage report |
| `format` | Runs a format check using biome |
| `format:fix` | Fix all formatting errors.
| `lint` | Runs a lint check using biome. | 
| `lint:fix` | Fix all the safe lint errors |
| `lint:unsafe` | Fix all lint errors, safe and unsafe. |
| `init` | Uninstall the demo package.
| `prepare` | Husky automated script. |