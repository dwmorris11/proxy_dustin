const path = require('path');

module.exports = {
  entry: './public/combined.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development'
};