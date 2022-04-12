const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   chainWebpack: config => {
      // GraphQL Loader
      config.module
        .rule('graphql')
        .test(/\.graphql$/)
        .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end()
    }
})
