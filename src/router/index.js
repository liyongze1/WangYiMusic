//导入路由
import VueRouter from 'vue-router'
import Vue from "vue"
Vue.use(VueRouter)
Vue.config.productionTip = false;
import Home from "./Home.vue"
//定义路由
const routes=[
  {
    path:"/",//页面的路径
    name:"home",
    component:Home
  }
]
//创建路由实例 传routes 配置
const router = new VueRouter({
  //键值与键名相等简写
  routes
})
export default router