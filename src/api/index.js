/**
 * 封装所有的请求函数
 */
import Ajax from './ajax';
import base from './base';

// api对象方式
// const api = {
//     toRegister() {
//         return Ajax.get('/',);
//     },
// }
// export default api;

// 默认导出方式
/**
 * 获取首页轮播图
 * @returns [{id:'', imgURL:''},{},{}]
 */
export const getBanner = () =>  Ajax.get(base.banner);
/**
 * 获取首页热门房源列表
 * @params {*} params
 * @return {city: '北京'}
 */
export const getHotHouse=(params)=>Ajax.get(base.hothouse,{params})
/**
 * 获取城市选择中的热门城市
 */
export const getHotCity=() => Ajax.get(base.selectCity);