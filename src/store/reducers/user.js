import { SET_USER } from "../action/action-type";

/**
 * reducer 函数
 * 作用：
 * 1.初始化状态
 * 2.分支判断，处理状态
 * 3.返回新状态
 * action: { type: '', payload: '' }
 */
function user(preState = { userName: '', token: ''}, action) {
    const { type, payload } = action;
    const newState = { ...preState };
    switch(type) {
        case SET_USER: // 设置用户名
            newState.userName = payload;
            return newState;
        default:
            return newState;
    }  

}

export default user;