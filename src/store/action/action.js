/**
 * 导出所有action
 */

import { SET_CITY, SET_USER } from "./action-type";

export const setCityAction= (name) => ({type:SET_CITY,payload:name})

// 导出设置用户名的action
export const setUserAction = (username) => ({ type: SET_USER, payload: username})

// 导出删除用户名的action
export const delUserAction = () => ({ type: DEL_USER})