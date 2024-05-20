# dsa

## Installation

> `git clone https://github.com/ASproson/dsa.git`

> `npm i`

> `npm start`

The last command triggers Typescript in watch mode

To execute specific console logs:

> `cd dist`

> `node [FILENAME]`

### TSConfig Changes

Root TS files are generated in `src` and are compiled into js inside of `dist` by setting the `rootDir` and `outDir` respectively

CommonJS is swapped for modules via `module: NodeNext` and `moduleResolution: NodeNext` alongside using `npm i -g ts2esm` with `ts2esm` being executed from the root
