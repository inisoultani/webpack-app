const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
    react: './src/react.js',
  },
  plugins: [
    // plugin that help us generate the html
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name].[hash][ext]',
        },
      },
      // we dont need separated file-loader for img
      // since html-loader in webpack 5 already support this kind on needs
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[contenthash].[ext]",
      //     outputPath: "imgs",
      //   },
      // },
    ],
  },
};
