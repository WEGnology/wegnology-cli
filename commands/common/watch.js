const { capitalize } = require('omnibelt');

module.exports = (nameOfCommand, program) => {
  program.addHelpText('after', `
Watch your ${capitalize(nameOfCommand)} while you make changes and have them automatically uploaded
$ wegnology ${nameOfCommand} watch
`);
  program
    .command('watch')
    .action(require('../../lib/watch-files')(nameOfCommand));
};
