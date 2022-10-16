/**
 * 对axios进行二次封装
 */
import Axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
const service = Axios.create({
    // 配置通用的基础路径和超时
    baseURL:'/api', // 会给每个请求链接前面都加上/api,例如/api/banner
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(config => {
    // 开启请求进度条
    nProgress.start();
    // 加token
    config.headers.token = '11111111111111';

    return config;
})
// 响应拦截
service.interceptors.response.use(res => {
    // 结束进度条
    nProgress.done();
    return res.data;
}, err => {
    return Promise.reject(err);
})
// 导出
export default service;