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
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    // treat any tag that starts with ion- as custom elements
                    isCustomElement: tag => tag.startsWith('gbt-')
                }
            }))
    },
    configureWebpack: {
        plugins: [],
        resolve: {
            alias: {
                vue:"vue/dist/vue.esm-bundler.js",
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
                },/*
                {
                    from: path.resolve(__dirname, "./../../src/shopify/snippets/!**!/!*.liquid"),
                    to: path.resolve(__dirname, "./../../shopify/snippets/s-[name][ext]")
                }*/
            ],
        }),
    ]);
}
