import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/vue-popup.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-popup.min.js',
      format: 'cjs',
      plugins: [terser({
        compress: {
          ecma: 2015,
          pure_getters: true
        }
      })]
    },
    {
      file: 'dist/vue-popup-es.js',
      format: 'es'
    }
  ]
}
