# Typescript Skeleton

## Content <!-- omit in toc -->

-   [Typescript Skeleton](#typescript-skeleton)
    -   [Introduction](#introduction)
    -   [Quick Start](#quick-start)
        -   [Requirements](#requirements)
        -   [How to start](#how-to-start)
        -   [How to test](#how-to-test)
    -   [License](#license)
    -   [How to continue](#how-to-continue)

## Introduction

Good day fellow people.
This is an opinionated skeleton for Typescript projects.
The Typescript code will be compiled into CommonJS to be used in a Node environment.

This skeleton includes building, testing, linting and formatting for Typescript code.
Furthermore does it offer a proven structure to document the project over the [documentation-skeleton](https://github.com/deven-org/documentation-skeleton).

Feel free to use it under the MIT license.

## Quick Start

1. install dependencies
    ```bash
    npm i
    ```
2. start development mode
    ```bash
    npm run dev
    ```
3. change the code and have fun with it

### Requirements

To run the code the system one uses needs to fulfill the following requirements:

-   Node.js 20.X.X or higher
-   npm 10.X.X or higher

### How to start

1. Install all dependencies
    ```bash
    npm i
    ```
2. Run the build command
    ```bash
    npm run build
    ```
3. Run the compiled script
    ```bash
    npm run start
    ```

For the development process one can omit the build and run steps and use the dev command to run the code after every saved change:

```bash
npm run dev
```

### How to test

Functionality can be tested with Jest.
One sample test is already available in the `tests` folder.

It is best practice to have one test file for each code file one wants to test. The test file should include the name of the code file, e.g.:

-   code file: `./src/Index.ts`
-   test file: `./tests/Index.test.ts`

To run the tests a npm script is provided:

```bash
npm run test
```

## License

[MIT License](LICENSE.md)

## How to continue

Once one is familiar with this skeleton feel free to use it as a base to set up a new Typescript project to get head start.
