// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.less'],
      use: [['less', { javascriptEnabled: true }]],
      extract: true
    }),
    terser()
  ]
}
