import React from 'react';
import './Login.less';

export default function Login() {
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
          <input className='inp' type="text" placeholder='用户名'/>
        </div>
        <div>
          <input className='inp' type="text" placeholder='密码' />
        </div>
        <button>登录</button>
      </div>
    </div>
  )
}
