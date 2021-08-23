const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // to avoid cache mechanism in client browser, so we need to generate unique file
    // so that the browser will always treat it as new file instead existing cached file
    // contenthash : will generate hash md5 based on the content file
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // clean build destination folder before each build
    // ref : https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
    // so there's no need to use clean-webpack-plugin
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // the order of the array is IMPORTANT, it loads BACKWARDS
        // so we need to make sure that css-loader (generate css in webpack)
        // then style-loader will generate separated css file
        use: [
          MiniCssExtractPlugin.loader, // 3. generate separated css file
          'css-loader', // 2. turn css into commonJS
          'sass-loader', // 1. turn scss into css
        ],
      },
      {
        test: /\.css$/,
        // the order of the array is IMPORTANT, it loads BACKWARDS
        // so we need to make sure that css-loader (generate css in webpack)
        // then style-loader will generate separated css file
        use: [
          MiniCssExtractPlugin.loader, // 3. generate separated css file
          'css-loader', // 2. turn css into commonJS
        ],
      },
    ],
  },
});
