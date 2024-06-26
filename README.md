# Data Structures and Algorithms

This repo serves to collect the most illustrative algorithms for specific concepts across DSA. Each solution is provided with an in-depth overview of the code, a space-time complexity analysis, and covers any classic gotchas

All solutions are written in Typescript and are located in the [src folder](./src/)

If you prefer native JavaScript, you can view the compiled versions in the [dist folder](./dist/)

## Installation

> `git clone https://github.com/ASproson/dsa.git`

> `npm i`

> `npm start`

The last command triggers Typescript in watch mode

To execute specific console logs:

> `cd dist`

> `node [FILENAME]`

## TSConfig Changes

Root TS files are generated in `src` and are compiled into js inside of `dist` by setting the `rootDir` and `outDir` respectively

I prefer ESModules over CommonJS, and I've swapped them via: `module: NodeNext` and `moduleResolution: NodeNext`

Additionally, we need to `npm i -g ts2esm` and then run `ts2esm` from the root a single time to ensure no issues
