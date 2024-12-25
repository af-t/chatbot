const {spawnSync} = require('node:child_process');
const {join} = require('node:path');

const dist = join(__dirname, '..', 'dist');
const input = join(__dirname, '..', 'src', 'chatbot.mjs');
const plugins = '@rollup/plugin-node-resolve';
spawnSync('npx', [
  'rollup',
  '-f', 'esm',
  '-i', input,
  '-o', join(dist, 'index.js'),
  '-p', plugins
]);
spawnSync('npx', [
  'rollup',
  '-f', 'cjs',
  '-i', input,
  '-o', join(dist, 'index.node.js'),
  '-p', plugins
]);
spawnSync('npx', ['uglify-js', join(dist, 'index.js'), '-o', join(dist, 'index.min.js')]);
spawnSync('npx', ['uglify-js', join(dist, 'index.node.js'), '-o', join(dist, 'index.node.min.js')]);
