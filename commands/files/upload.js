const { files: params } = require('../../lib/get-upload-params');
const helpLines = `
Upload all files
$ wegnology files upload
Upload files in images directory
$ wegnology files upload images/*
Force an upload of all files overwriting remote modifications
$ wegnology files upload -f
`;
module.exports = (program) => {
  program.addHelpText('after', helpLines);
  require('../utils/upload')(program, params);
};
