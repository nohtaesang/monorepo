import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = [
  {
    input: './index.ts',
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
    input: './index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [peerDepsExternal(), esbuild({ jsx: 'automatic', target: 'esnext' }), dts()],
  },
];
export default config;
