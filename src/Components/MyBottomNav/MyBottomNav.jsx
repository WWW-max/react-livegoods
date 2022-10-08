import React from 'react'
import { NavLink } from 'react-router-dom';
import './MyBottomNav.less';
export default function MyBottomNav() {
    return (
        <div className='nav'>
            <div className="item"><NavLink to={'/'}>首页</NavLink></div>
            <div className="item"><NavLink to={'/shop'}>商城</NavLink></div>
            <div className="item"><NavLink to={'/live'}>生活</NavLink></div>
            <div className="item"><NavLink to={'/mine'}>我的</NavLink></div>
        </div>
    )
}
