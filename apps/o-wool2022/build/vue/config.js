const {defineConfig} = require('@vue/cli-service')
const path = require("path");
process.env.VUE_TEST_APP_VERSION = "i am a gillian!!!!"//require('./package.json').version

module.exports = defineConfig({
    filenameHashing: (process.env.NODE_ENV === 'production'),
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
