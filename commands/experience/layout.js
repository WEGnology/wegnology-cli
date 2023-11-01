const helpLines = `View all your experience pages with their layouts
$ wegnology experience layout
View all of your experience pages that match this pattern with their layout
$ wegnology experience layout -l v1.*
Set a layout for page example
$ wegnology experience layout example
`;
module.exports = (program) => {
  program.addHelpText('after', helpLines);
  program
    .command('layout [page]')
    .option('-l, --list <pattern>', 'pages that match this pattern will be listed with their layout')
    .action(require('../../lib/experience-layout'));
};
