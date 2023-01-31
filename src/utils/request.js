import Axios from 'axios'
import qs from 'querystring'
//自定义配置
const instance = Axios.create({
     //请求配置的基础路径
    timeout: 5000,//请求设置的超时时间
})
//添加请求的拦截器
instance.interceptors.request.use(function (config) {
    //参数能判断请求的方式url等一些信息
    console.log("config-请求拦截器", config);
    if (config.method == "post") {
        //在发送请求之前处字符串格式
        config.data = qs.stringify(config.data)
    }
    return config
})
//添加响应的拦截器--对错误的数据处理参数
// instance.interceptors.response.use(function (response) {
//     //成功响应的数据
//     return response
// }, function (error) {
//     //失败的响应 对状态码进行解释
//     const { response } = error;
//     errorHandle(response.status, response.info)
// });
// function errorHandle(status, info) {
//     switch (status) {
//         case 200:
//             console.log("成功");
//             break;
//         case 400:
//             console.log("表示请求报文中存在语法错误")
//             break
//         case 401:
//             console.log("未经许可，需要通过HTTP认证")
//             break
//         case 403:
//             console.log("服务器拒绝该次访问（访问权限出现问题）")
//             break
//         case 404:
//             console.log("表示服务器上无法找到请求的资源，除此之外，也可以在服务器拒绝请求但不想给拒绝原因时使用")
//             break
//         case 500:
//             console.log("表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时")
//             break
//         case 501:
//             console.log("表示客户端请求的功能还不支持，类似“即将开业，敬请期待”")
//             break
//         case 502:
//             console.log("通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误")
//             break
//         case 503:
//             console.log("表示服务器暂时处于超负载或正在进行停机维护，无法处理请求发生了错误，也有可能是web应用存在的bug或某些临时的错误时")
//             break

//     }
// }

export default instance