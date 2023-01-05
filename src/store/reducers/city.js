import { SET_CITY } from "../action/action-type";

/**
 * 城市
 * 1）初始化状态
 * 2）分支判断，处理状态
 * 3）返回新状态
 */
function city(prevState="天津", action){
    let { type, payload } = action;
    let newSate = prevState;

    switch(type) {
        case SET_CITY:
            newSate = payload
            return newSate;
        default:
            return newSate;      
    }
}

export default city;