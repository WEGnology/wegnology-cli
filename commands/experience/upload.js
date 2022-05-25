const { experience: params } = require('../../lib/get-upload-params');
const constants = require('../../lib/constants');
const printHelp = require('../../lib/print-help');
const helpLines = [
  'Upload all experience views',
  '$ wegnology experience upload',
  'Upload only component views',
  '$ wegnology experience upload --type components /*'
];
module.exports = (program) => {
  const options = [ constants.options.viewType ];
  const subProgram = require('../utils/upload')(program, params, options);
  printHelp(subProgram, helpLines);
  return { helpLines };
};
