const { fromFiles } = require('@rjhilgefort/export-dir');
const commands = Object.values(fromFiles(null, __dirname));
const commonCommands = Object.values(require('../common'));
const p = require('commander');
const program = new p.Command('wegnology files');
program.description('Manage Files on WEGnology for your Application.');
program.showHelpAfterError();
commands.forEach((command) => {
  command(program);
});
commonCommands.forEach((command) => {
  command('files', program);
});

module.exports = program;
