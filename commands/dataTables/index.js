const { fromFiles } = require('@rjhilgefort/export-dir');
const commands = Object.values(fromFiles(null, __dirname));
const p = require('commander');
const program = new p.Command('wegnology datatables');

program.description('Manage Data Tables on WEGnology for your Application');
program.showHelpAfterError();

commands.forEach((command) => {
  command(program);
});

module.exports = program;
