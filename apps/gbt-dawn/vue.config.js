const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    runtimeCompiler: true,
    configureWebpack: config=>{
        config.resolve = {
            alias:{
                vue:"vue/dist/vue.esm-bundler.js"
            }
        }
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
  }
})
