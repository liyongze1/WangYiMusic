/*
  公共的请求方法
*/
import base from "./base"
import request from "@/utils/request"
const api = {
  // 1.推荐音乐接口
  getMusic() {
    //返回给getMusic这个方法
    return request.get(base.rem.musicUrl)
  },
  //2.最新音乐接口
  /*
  2.最新音乐的接口https://interface.music.163.com/weapi/personalized/newsong
  参数：params  值：cwwg8oaBDlGd286ZzeBrENQ34XKygKjZAQySoNxYlw2Lp/V4n4oMq9Y9PjmCujtu
       encSecKey 值：68104e0eab1229a332e30f62511f5e5a2879198a7376fce5e1d2bc25af0b815aef5e335b66f522835ca94ce74b238c0f908e13669d0ba9e9dd0c28cf02c79ec133e18207a10c3d65db97eadaca5b1acecc3a3c374d61164c3665788b79af8e5d54e48af4246110aaefbbc12edc4abd24112f0bc31023272e3a2630150a92fdb4
  */
 postMusic(){
  return request.post(base.adjective.musicUrl,{
    params:"cwwg8oaBDlGd286ZzeBrENQ34XKygKjZAQySoNxYlw2Lp/V4n4oMq9Y9PjmCujtu",
    encSecKey:"68104e0eab1229a332e30f62511f5e5a2879198a7376fce5e1d2bc25af0b815aef5e335b66f522835ca94ce74b238c0f908e13669d0ba9e9dd0c28cf02c79ec133e18207a10c3d65db97eadaca5b1acecc3a3c374d61164c3665788b79af8e5d54e48af4246110aaefbbc12edc4abd24112f0bc31023272e3a2630150a92fdb4"
  })
 },
 //热歌榜接口
 hotMusic(){
  return request.post(base.hotMusic.hot,{
    //密钥
    params:"sFgDfLuf/sFzmz3Vf6jMaSJHvxV/3b1K/p53AT8dDlR0aU1DCjzrb03MW/rJ3eEY",
    encSecKey:"dc9602d46a014c13fee9850dcd0b1704b17f43f1a7cd354efc42009269bd224df8f32e2a97571b1a5cd966e7404a068c049235864afe03215e26156ea4b986295e0fa002ccb648d0b7f070628f93f7102322db3b09ee78b7672eb60a5837332ce16a096792706c49d3fbe00f53dea67babdaf22bda0ebcb1173caa5098aac81a"
  })
 }
}
export default api