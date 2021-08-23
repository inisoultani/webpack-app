const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // the order of the array is IMPORTANT, it loads BACKWARDS
        // so we need to make sure that css-loader (generate css in webpack)
        // then style-loader will inject the css into the DOM
        use: [
          'style-loader', // 3. inject styles into DOM
          'css-loader', // 2. turn css into commonJS
          'sass-loader', // 1. turn scss into css
        ],
      },
      {
        test: /\.css$/,
        // the order of the array is IMPORTANT, it loads BACKWARDS
        // so we need to make sure that css-loader (generate css in webpack)
        // then style-loader will inject the css into the DOM
        use: [
          'style-loader', // 3. inject styles into DOM
          'css-loader', // 2. turn css into commonJS
        ],
      },
    ],
  },
  output: {
    // development mode dont need the contenthash
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
});
