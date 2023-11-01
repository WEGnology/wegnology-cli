const helpLines = `
To generate our standard experience starter views
$ wegnology experience bootstrap`;

module.exports = (program) => {
  program.addHelpText('after', helpLines);
  program
    .command('bootstrap')
    .action(require('../../lib/experience-bootstrap'));
};
