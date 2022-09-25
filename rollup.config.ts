import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "tutorial/src/main.js",
  output: [
    {
      file: "tutorial/dist/bundle.js",
      format: "cjs",
    },
    {
      file: "tutorial/dist/bundler.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
