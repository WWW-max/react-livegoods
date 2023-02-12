import React, { useRef  } from 'react';
import './Login.less';

export default function Login() {
  // 创建ref: 函数组件中只能获取DOM元素，类组件中还能获取组件实例
  const myRef = useRef();
  // 登录事件
  const login = () => {
    // 1.获取用户名
    let val = myRef.current.value;
    // 2.把用户信息存到redux（token, 用户名，islogin）
    
    // 3.跳转页面
  }
  return (
    <div>
       {/* 背景 */}
      <div className='login-bg'>
        login
        {/* <img className='login-logo'src={logo} alt=''/> */}
      </div>
      {/* 登录窗口 */}
      <div>
        <div>
          {/* 非受控组件 */}
          <input className='inp' ref={myRef} type="text" placeholder='用户名'/>
        </div>
        <div>
          <input className='inp' type="text" placeholder='密码' />
        </div>
        <button onClick={ login }>登录</button>
      </div>
    </div>
  )
}
