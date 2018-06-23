const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'parser.js',
    path: path.resolve(__dirname, 'lib'),
  },
};
