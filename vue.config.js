const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/_variables.scss";
                         @import "@/assets/style/_mixins.scss";`
      }
    }
  }
})
