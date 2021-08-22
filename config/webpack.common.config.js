const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
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
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name].[hash][ext]",
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
