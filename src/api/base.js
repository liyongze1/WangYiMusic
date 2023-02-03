/*
  公共的接口配置资源
 */
const base = {
  //推荐音乐接口
  rem: {
    host: "http://iwenwiki.com:3000/",//基本域名
    musicUrl: "/api/personalized?limit=6"//首页推荐音乐 前端给后端传递：?limit=1
  },
  //最新音乐接口
  adjective:"/foo/weapi/personalized/newsong"
  ,
  //热歌榜接口https://interface.music.163.com/weapi/v6/playlist/detail
  hotMusic:"/foo/weapi/v6/playlist/detail",
  //热门搜索接口https://interface.music.163.com/weapi/search/hot
  hotSearch:"/foo/weapi/search/hot",
  //搜索框接口http://iwenwiki.com:3000/search/suggest 
  searchMusic:"/api/search/suggest",
  //推荐音乐歌单接口https://interface.music.163.com/weapi/v6/playlist/detail
  remList:"/foo/weapi/v6/playlist/detail",
  // 音乐播放界面接口http://music/weapi/song/enhance/player/url/v1
  songUrl:"/xoo/weapi/song/enhance/player/url/v1",
  //http://m801.music.126.net/20230203151625/41dcd966ea5dcfbd3e2735cadc2e7204/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/24060621397/b564/ba5f/b5fc/4e857327995f1119eef827c019c25a33.m4a
  //音乐歌词的接口//iwenwiki.com:3000/
  songLyric:"/api/lyric",
  
}
export default base