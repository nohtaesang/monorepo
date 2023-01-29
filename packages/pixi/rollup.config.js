import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: './src/index.tsx',
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
    plugins: [peerDepsExternal(), esbuild({ jsx: 'automatic', target: 'esnext' })],
  },
  {
    input: './src/index.tsx',
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [peerDepsExternal(), esbuild({ jsx: 'automatic', target: 'esnext' }), dts()],
  },
];
