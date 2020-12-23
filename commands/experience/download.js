const { experience: params } = require('../../lib/get-download-params');
const constants = require('../../lib/constants');
const printHelp = require('../../lib/print-help');

const helpLines = [
  'Download all experience views (components, layouts and pages)',
  '$ wegnology experience download',
  'Download component views',
  '$ wegnology experience download --type components',
  'Download component views with names that start with error',
  '$ wegnology experience download --type components error*',
  'Force a download of all views overwriting local modifications',
  '$ wegnology experience download -f'
];


module.exports = (program) => {
  const options = [ constants.options.viewType ];
  const subProgram = require('../utils/download')(program, params, options);
  printHelp(subProgram, helpLines);
  return { helpLines };
};
