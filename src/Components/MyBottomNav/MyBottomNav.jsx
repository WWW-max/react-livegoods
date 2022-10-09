import React from 'react'
import { NavLink } from 'react-router-dom';
import './MyBottomNav.less';
export default function MyBottomNav() {
    return (
        <div className='nav'>
            <div className="item">
                <NavLink exact to={'/'}>
                    <i className='iconfont icon-home'></i>
                    首页
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/shop'}>
                    <i className='iconfont icon-shop'></i>
                    商城
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/live'}>
                    <i className='iconfont icon-live'></i>
                    生活
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/mine'}>
                    <i className='iconfont icon-mine'></i>
                    我的
                </NavLink>
            </div>
        </div>
    )
}
