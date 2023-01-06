import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import MyInput from '../../../Components/MyInput/MyInput';
import './HomeHeader.less';
function HomeHeader(props) {
    return (
        <div className='home-header'>
            {/* 左侧 */}
            <div className="address">
                <Link className='city' to={'/city'}>
                    {props.cityName}
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

export default connect(state => ({
    cityName: state.city,
}))(HomeHeader);