const {defineConfig} = require('@vue/cli-service')
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
process.env.VUE_TEST_APP_VERSION = "i am a gillian!!!!"//require('./package.json').version

module.exports = defineConfig({
    filenameHashing: false,
    runtimeCompiler: true,
    css: {
        //TODO: figure out how to minify the css sourceMap:true,
        extract: (process.env.NODE_ENV === 'production'),
    },
    configureWebpack: {
        plugins: [],
        resolve: {
            alias: {
                '@node': path.resolve(__dirname, 'node_modules'),
                '@': path.resolve(__dirname, 'src/'),

            },
        }
    },
})

console.log("Node ENV vue.config.watch.js: ", process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {
    module.exports.configureWebpack.plugins = (
        module.exports.configureWebpack.plugins || []
    ).concat([
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./../../dist/js/*.js"),
                    to: path.resolve(__dirname, "./../../shopify/assets/[name][ext]"),
                },
            ],
        }),
    ]);
}
