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
  postMusic() {
    return request.post(base.adjective, {
      params: "cwwg8oaBDlGd286ZzeBrENQ34XKygKjZAQySoNxYlw2Lp/V4n4oMq9Y9PjmCujtu",
      encSecKey: "68104e0eab1229a332e30f62511f5e5a2879198a7376fce5e1d2bc25af0b815aef5e335b66f522835ca94ce74b238c0f908e13669d0ba9e9dd0c28cf02c79ec133e18207a10c3d65db97eadaca5b1acecc3a3c374d61164c3665788b79af8e5d54e48af4246110aaefbbc12edc4abd24112f0bc31023272e3a2630150a92fdb4"
    })
  },
  //热歌榜接口
  hotMusic() {
    return request.post(base.hotMusic, {
      //密钥
      params: "sFgDfLuf/sFzmz3Vf6jMaSJHvxV/3b1K/p53AT8dDlR0aU1DCjzrb03MW/rJ3eEY",
      encSecKey: "dc9602d46a014c13fee9850dcd0b1704b17f43f1a7cd354efc42009269bd224df8f32e2a97571b1a5cd966e7404a068c049235864afe03215e26156ea4b986295e0fa002ccb648d0b7f070628f93f7102322db3b09ee78b7672eb60a5837332ce16a096792706c49d3fbe00f53dea67babdaf22bda0ebcb1173caa5098aac81a"
    })
  },
  //热门搜索接口
  hotSearch() {
    return request.post(base.hotSearch, {
      params: "5gJJgEV40KZeJbtYAiVXIIhsOaucHftXQ59YoBCps18=",
      encSecKey: "b457acc12663ebce2b3d68443932d5475f15f75d7be5d86f3995cc81c344a43b695ec78e5c1fb76734fde91130999b4497dc62706bf8c81898565d288002346c798b7a9ce75cfd80102bf7e5a03af2659cf50799a8a31af8515e0eb2858f3630aa6dd9368ffe0c07a77a5a9e955ce7cce1fcd175dabeeafa090c1c1a25564d47"
    })
  },
  //搜索框接口
  /*
  请求方式    get get传参数 是一个对象对象里面必须有params属性去传参
  参数     必须  keywords   string 
  参数     必须  type   string "mobile"  移动端
  */
  searchMusic(params) {
    return request.get(base.searchMusic, {
      params
    })
  },
  //推荐音乐歌单接口
  musicList() {
    return request.post(base.remList, {
      params: "D1DXGBweGbLGXL9vPm4gd1E+j2FXGDJcCMIdIq2KPCftDUla/gT477oIA6N08r+8edIrx9TQ4LpCoJq3Yod+Gd+bBZmvv0WtI6Dmx3sE90w=",
      encSecKey: "36c8309b668d7debf8dad322a2546fe6de6f19d49c76440210a263c56f97ebeabb70ec582b7806cec15c3a3c845996f63fd15fffdfe7474334e879ecd7d5ac6b99fa78000e4c3ac8e41180054f5a7442896620dff7014549c296676b626ccef2f5c294542f58ce6515366c10f3e03f8033ac929c80d31766812d08a7137e0222"
    })
  },
  //音乐播放界面的接口
  //参数id
  songUrl() {
    return request.post(base.songUrl, {
      params:
        'bPiGrSaktLyBq/sZGv/DyV4HLl3eO3kezKlYBjcIcEdx4MexRhYhDhGIPx6iMiBvBLEyygJ7UuqE8Iw1Yw4wTZHeR4rWH4K1OvKhfl9d9uwTP6TWh8bLFmqaQhNtxmHC',
      encSecKey:
        'bb5d7cedd3d6e2482cbfc16f4f05b55e120ae6402af4bc932da34b234c9acb532cf6d6f0b89d3f682515df5e90c5d11224d5fce4aa2940af2e0dfddf1186cb35996dc748cfe6a327e9bee0a12a58688cc7e282a721f3b6f5da9f8b94c9cbc228b4a5693c306dbf5db13318472e9c0a5929648be0b94d2753979d7e089b5bdc73'

    })
  },
  //音乐歌词的接口 params是一个对象形式的数据
  songLyric (params){
    return request.get(base.songLyric,{params})
  }
}
export default api