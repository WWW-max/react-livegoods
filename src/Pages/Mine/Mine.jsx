import React from 'react'
import { connect } from 'react-redux'
import { delUserAction } from '../../store/action/action';

function Mine(props) {
  // 退出登录
  function loginOut() {
    // 1、redux删除username
    props.delUser();
    // 2、删除本地储存
    localStorage.removeItem('username');
    // 3、页面跳转
    props.history.goBack();
  }
  return (
    <div>Mine
      <button onClick={loginOut}>退出登录</button>
    </div>
  )
}

export default connect(null, dispatch => ({
  delUser: () => { dispatch(delUserAction())}
}))(Mine);