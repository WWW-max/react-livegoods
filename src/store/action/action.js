/**
 * 导出所有action
 */

import { SET_CITY } from "./action-type";

export const setCityAction= (name) => ({type:SET_CITY,payload:name})