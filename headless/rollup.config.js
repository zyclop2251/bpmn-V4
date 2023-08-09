/* eslint-env node */

import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './HeadlessModeler.js',
  output: {
    file: './dist/HeadlessModeler.mjs',
    format: 'esm'
  },
  plugins: pgl()
};

function pgl(plugins = []) {
  return [
    nodeResolve(),
    commonjs(),
    json(),
    ...plugins
  ];
}