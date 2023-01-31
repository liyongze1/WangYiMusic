import Vue from 'vue'
import App from './App.vue'
//挂载路由
import router from '../src/router/index'
//全局css样式
import "./assets/css/rest.css"
//导入vant.js文件
import "./plugins/vant"
//导入api
import api from "./api"
//挂载到Vue原型,所有的vue实例（this）都可以访问
Vue.prototype.$api=api
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
