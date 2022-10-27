import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy-assets';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import { fileURLToPath } from 'url';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.jsx', '.js'] }),
    commonjs(),
    postcss(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: './node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    copy({
      assets: ['src/assets'],
    }),
    svgr(),
    alias({
      resolve: ['*', '.js', '.jsx', '.svg'],
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
        },
      ],
    }),
    filesize(),
    terser(),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};

