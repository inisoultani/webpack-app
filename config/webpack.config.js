const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    // to avoid cache mechanism in client browser, so we need to generate unique file
    // so that the browser will always treat it as new file instead existing cached file
    // contenthash : will generate hash md5 based on the content file
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
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
