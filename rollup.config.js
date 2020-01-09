
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import splintered from 'svelte-preprocess-splintered';

export default {
  input: 'showcase/main.js',
  output: {
    file: 'showcase/main.min.js',
    format: 'iife',
    sourcemap: true,
    name: 'app',
  },
  plugins: [
    svelte({
      preprocess: splintered(),
      css (css) {
        css.write('showcase/showcase.css', false);
      },
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),
    livereload('showcase'),
  ],
  watch: {
    clearScreen: false
  },
};
