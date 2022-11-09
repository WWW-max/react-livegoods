import React from 'react'
import { Link } from 'react-router-dom'
import MyInput from '../../../Components/MyInput/MyInput';
import './HomeHeader.less';
export default function HomeHeader() {
    return (
        <div className='home-header'>
            {/* 左侧 */}
            <div className="address">
                <Link className='city' to={'/city'}>
                    北京
                    <i className='iconfont icon-xiangxia'></i>
                </Link>
            </div>
            {/* 中间搜索框 */}
            <div className="search">
                <MyInput />
            </div>
            {/* 右侧购物车 */}
            <div className="cart">
                <i className='iconfont icon-gouwuche'></i>
            </div>
        </div>
    )
}
