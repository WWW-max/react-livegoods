import React from 'react';
import MyBottomNav from '../../Components/MyBottomNav/MyBottomNav';

export default function Layout(props) {
  return (
    <>
        {/* 路由出口 */}
        <div className="content">
            {props.children}
        </div>
        {/* 导航底部 */}
        <div className="footer">
          <MyBottomNav />
        </div>
    </>
  )
}
