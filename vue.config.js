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
      //推荐音乐https://interface.music.163.com/weapi/personalized/newsong
      '/foo': {
        target: 'https://interface.music.163.com',//请求的后台接口
        ws: true,
        changeOrigin: true,
        pathRewrite:{//路径重写
        "^/foo":""
        }
      },
      // 
      // '/too':{
      //   target:"https://interface.music.163.com",
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite:{//路径重写
      //   "^/too":""
      //  }
    }
  }
  
})
