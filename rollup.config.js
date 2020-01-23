import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: [`src/index.js`],
  output: {
    file: `kss-assets/kss.js`,
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    name: 'Kss',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    isProduction && terser(),
  ],
};
