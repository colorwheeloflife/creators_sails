const path = require('path');

module.exports.webpack = {

  // webpack options, see https://webpack.js.org/configuration/
  options: {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      filename: 'js/bundle.js',
      publicPath: '/'
    }
  }

};
