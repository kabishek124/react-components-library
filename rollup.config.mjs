import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { createRequire } from "module";
import postcss from "rollup-plugin-postcss";

// Using require to load package.json with assertion
const require = createRequire(import.meta.url);
const pkg = require("./package.json", { assert: { type: "json" } });

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      extensions: [".css"],
      minimize: true,
      sourceMap: true,
      modules: true,
      inject: { insertAt: "top" },
    }),
  ],
  external: ["react", "react-dom", "styled-components"],
};
