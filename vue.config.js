const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com:3000',//请求的后台接口
        ws: true,
        changeOrigin: true,
        pathRewrite:{//路径重写
        "^/api":""
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
  
})
