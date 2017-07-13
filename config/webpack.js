const path = require('path');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports.webpack = {

  // webpack options, see https://webpack.js.org/configuration/
  options: {
    entry: {
      app: './assets/js/src/index.js',
      style: './assets/styles/importer.less'
    },

    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },

    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, // load CSS files
        loaders: [
          'style-loader', // npm install --save style-loader
          `css-loader?root=${__dirname}/assets/styles`, // npm install --save css-loader
          'autoprefixer-loader?browsers=last 2 versions' // npm install --save autoprefixer-loader
        ]
      },
      {
        test: /\.scss$/, // load SASS files
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 2 versions',
          'sass-loader?sourceMap' // npm install --save sass-loader node-sass
        ]
      },
      {
        test: /\.less$/, // load LESS files
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 2 versions',
          'less-loader?sourceMap' // npm install --save less-loader less
        ]
      }]
    }
  }

};

// plugins: [
//   new CopyWebpackPlugin([{
//     from: './assets/images/**/*',
//     to: 'images/',
//     flatten: true
//   }])
// ]
