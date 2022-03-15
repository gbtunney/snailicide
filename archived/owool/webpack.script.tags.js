const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
var glob = require("glob");

//todo: move this to other gLib.
const getFileArr = function (_globpath) {
  return glob.sync(_globpath).map(function (_path) {
    const regex = /[A-Za-z0-9_\-\.]+\.[A-Za-z0-9]+$/;
    const [filename] = _path.toString().match(regex);
    return filename;
  });
};

const config_options = {
  input_template: path.resolve(__dirname, "public/template-script-tag.liquid"),
  output_filename: path.resolve(
    __dirname,
    "shopify/snippets/script-tag.liquid"
  ),
  directory_js: path.resolve(__dirname, "dist/js/*.js"),
  directory_css: path.resolve(__dirname, "dist/css/*.css"),
};

const {
  output_filename: filename,
  input_template: template,
  directory_js,
  directory_css,
} = config_options;

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: ["static"],
      filename,
      template,
      inject: false,
      files_js: getFileArr(directory_js),
      files_css: getFileArr(directory_css),
      minify: true,
    }),
  ],
};
