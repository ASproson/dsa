# dsa

### `tsconfig` changes

Root TS files are generated in `src` and are compiled into js inside of `dist` by setting the `rootDir` and `outDir` respectively

CommonJS is swapped for moudles via `module: NodeNext` and `moduleResolution: NodeNext` alongside using `npm i -g ts2esm` with `ts2esm` being executed from the root
