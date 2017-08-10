#!/usr/bin/env node

const micro = require('micro');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const handler = require('../src/index');

updateNotifier({ pkg }).notify();

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .option('p', {
    alias: 'port',
    describe: 'HTTP server PORT',
  })
  .default('p', 3000)
  .help('h')
  .alias('h', 'help')
  .version(() => pkg.version)
  .alias('v', 'version').argv;

console.log(`> [Mirco-medium-api] server is running on port ${argv.p}`); // eslint-disable-line

micro(handler).listen(argv.p);
