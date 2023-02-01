/*
  公共的接口配置资源
 */

const rem = {
  host: "http://iwenwiki.com:3000/",//基本域名
  musicUrl: "/api/personalized?limit=6"//首页推荐音乐 前端给后端传递：?limit=1
}
// export default base

const adjective = {
  musicUrl: "/weapi/personalized/newsong"
}
const base = {
  //推荐音乐接口
  rem: {
    host: "http://iwenwiki.com:3000/",//基本域名
    musicUrl: "/api/personalized?limit=6"//首页推荐音乐 前端给后端传递：?limit=1
  },
  //最新音乐接口
  adjective: {
    musicUrl: "/foo/weapi/personalized/newsong"
  },
  //热歌榜接口https://interface.music.163.com/weapi/v6/playlist/detail
  hotMusic:{
    hot:"/foo/weapi/v6/playlist/detail"
  }
}
export default base