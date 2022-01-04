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
    plugins: [],
    resolve: {
      alias: {
        '@node': path.resolve(__dirname, 'node_modules'),
      },
    }
},
};

if (process.env.NODE_ENV === undefined) {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.configureWebpack.plugins = (
    module.exports.configureWebpack.plugins || []
  ).concat([
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
  ]);
}
