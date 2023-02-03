//导入路由
import VueRouter from 'vue-router'
import Vue from "vue"
Vue.use(VueRouter)
Vue.config.productionTip = false;
import Home from "../views/Home"
import Download_App from "../views/Download_App.vue"
import music_header from "../components/home/tuijian/music_page/music_header"
// import Song from "../views/Song.vue"
//第二种导入方式
const Song =()=>import("../views/Song.vue")
//定义路由
const routes=[
  {
    path:"/",//页面的路径
    name:"home",
    component:Home
  },
  {
    path:"/downlad",
    name:"downlad",
    component:Download_App
  },
  //歌单页面路由
  {
    //动态路由
    path:"/music/:id",
    name:"music",
    component:music_header,
    //可以获取动态路由的id
    props:true
  },
  //音乐播放界面的路由
  {
    path:"/Song/:id/:title",
    name:"Song",
    component:Song,
    props:true
  }
]
//创建路由实例 传routes 配置
const router = new VueRouter({
  //键值与键名相等简写
  routes
})
export default router