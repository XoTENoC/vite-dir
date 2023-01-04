import { defineConfig, createServer } from 'vite';
import { directoryPlugin } from 'vite-plugin-list-directory-contents';
// eslint-ignore-next-line
import pkg from './package.json' assert { type: "json" };
import argv from 'cli-argparse';
import { spinner } from './update.js';

const args = argv(process.argv);

// Silent mode for updating, it doesnt run
if(args.flags.silent) {
  spinner.stop();
  process.exit(0);
}

console.log(`[${pkg.name}] ${pkg.version}`);
if (args.flags.version) {
  process.exit(0);
}

// check for root
const maybeRoot = process.argv?.[2] || '';
const root =
  maybeRoot.startsWith('--') || !maybeRoot ? process.cwd() : maybeRoot;

if (args.flags.debug) {
  console.log(`[DEBUG] [${pkg.name}] v${pkg.version}`);
  console.log(`[DEBUG] root: ${root}`);
  console.log(`[DEBUG] args.options: ${JSON.stringify(args.options)}`);
  console.log(`[DEBUG] args.flags: ${JSON.stringify(args.flags)}`);
}

const myConfig = defineConfig({
  command: 'serve',
  root,
  plugins: [directoryPlugin({ baseDir: root })],
  server: {
    ...args.options,
    ...args.flags,
  },
});

export async function start() {
  spinner.text = 'Starting Vite Server...';
  const server = await createServer(myConfig);
  await server.listen();
  spinner.clear();
  spinner.succeed();
  server.printUrls();
}
