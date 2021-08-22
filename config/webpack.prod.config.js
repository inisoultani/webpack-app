const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  mode: "production",
  output: {
    // to avoid cache mechanism in client browser, so we need to generate unique file
    // so that the browser will always treat it as new file instead existing cached file
    // contenthash : will generate hash md5 based on the content file
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "../public"),
  },
});
