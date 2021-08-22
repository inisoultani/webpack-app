const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    client: {
      overlay: true,
    },
  },
  output: {
    // development mode dont need the contenthash
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
  },
});
