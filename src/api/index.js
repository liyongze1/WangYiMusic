/*
  公共的请求方法
*/
import base from "./base"
import request from "@/utils/request"
const api={
    // 1.推荐音乐接口
    getMusic(){
        //返回给getMusic这个方法
        return request.get(base.musicUrl)
    }
}
export default api