const printHelp = require('../../lib/print-help');
const helpLines = [
  'View all your experience pages with their layouts',
  '$ wegnology experience layout',
  'View all of your experience pages that match this pattern with their layout',
  '$ wegnology experience layout -l v1.*',
  'Set a layout for page example',
  '$ wegnology experience layout example'
];
module.exports = (program) => {
  const subProgram = program
    .command('layout [page]')
    .option('-l, --list <pattern>', 'pages that match this pattern will be listed with their layout')
    .action(require('../../lib/experience-layout'));

  printHelp(subProgram, helpLines);
  return { helpLines };
};
