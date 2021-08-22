const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  plugins: [
    // plugin that help us generate the html
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // the order of the array is IMPORTANT, it loads BACKWARDS
        // so we need to make sure that css-loader (generate css in webpack)
        // then style-loader will inject the css into the DOM
        use: [
          "style-loader", // 3. inject styles into DOM
          "css-loader", // 2. turn css into commonJS
          "sass-loader", // 1. turn scss into css
        ],
      },
    ],
  },
};
