const { fromFiles } = require('@rjhilgefort/export-dir');
const commands = Object.values(fromFiles(null, __dirname));
const p = require('commander');
const program = new p.Command('wegnology datatables');
const printHelp = require('../../lib/print-help');

program.description('Manage Data Tables on WEGnology for your Application');

const help =  [];
commands.forEach((command) => {
  const { helpLines } = command(program) || {};
  if (helpLines) {
    help.push(...helpLines);
  }
});


printHelp(program, help);
module.exports = program;
