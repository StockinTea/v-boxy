import { terser } from "rollup-plugin-terser";
import Vue from "rollup-plugin-vue";
import buble from '@rollup/plugin-buble'

export default {
  input: 'src/main.js',
  output: [
    {
      name: 'umd-v-boxy',
      file: 'dist/v-boxy.js',
      format: 'umd'
    },
    {
      name: 'umd-v-boxy-min',
      file: 'dist/v-boxy.min.js',
      format: 'umd',
      plugins: [terser()]
    },
    {
      name: 'cjs-v-boxy',
      file: 'dist/v-boxy-cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    Vue(),
    buble()
  ]
}
