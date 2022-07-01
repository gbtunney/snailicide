const {defineConfig} = require('@vue/cli-service')
const path = require("path");
process.env.VUE_TEST_APP_VERSION = "i am a gillian!!!!"//require('./package.json').version

module.exports = defineConfig({
    filenameHashing: (process.env.NODE_ENV === 'production'),
    productionSourceMap: false,
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
