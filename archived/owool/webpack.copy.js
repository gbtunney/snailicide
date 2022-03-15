const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "dist/css/*.css"),
          to: path.resolve(__dirname, "shopify/assets/[name].[ext]"),
        },
        {
          from: path.resolve(__dirname, "dist/js/*.js"),
          to: path.resolve(__dirname, "shopify/assets/[name].[ext]"),
        },
        {
          from: path.resolve(__dirname, "src/assets/**/*"),
          to: path.resolve(__dirname, "shopify/assets/[name].[ext]"),
        },
      ],
    }),
  ],
};
