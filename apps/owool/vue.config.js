const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  // options...
  filenameHashing: false,
  runtimeCompiler: true,
  css: {
    extract: true,
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        //
        patterns: [
          {
            from: path.resolve(__dirname, "dist/css/app.css"),
            to: path.resolve(__dirname, "shopify/assets/"),
          },
          {
            from: path.resolve(__dirname, "dist/js/app.js"),
            to: path.resolve(__dirname, "shopify/assets/"),
          },
          {
            from: path.resolve(__dirname, "src/assets/svg/"),
            to: path.resolve(__dirname, "shopify/assets/"),
          },
          {
            from: path.resolve(__dirname, "src/assets/fonts/"),
            to: path.resolve(__dirname, "shopify/assets/"),
          },
          {
            from: path.resolve(__dirname, "src/assets/brooklyn_assets/"),
            to: path.resolve(__dirname, "shopify/assets/"),
          },
        ],
      }),
    ],
  },
};
