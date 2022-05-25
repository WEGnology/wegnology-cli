const { files: params } = require('../../lib/get-download-params');
const printHelp = require('../../lib/print-help');

const helpLines = [
  'Download all files',
  '$ wegnology files download',
  'Download files in images directory',
  '$ wegnology files download images/*',
  'Force a download of all files overwriting local modifications',
  '$ wegnology files download -f'
];

module.exports = (program) => {

  const subProgram = require('../utils/download')(program, params);

  printHelp(subProgram, helpLines);

  return { helpLines };
};
