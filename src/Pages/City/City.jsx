import React from 'react'
import CityHeader from './CityHeader/CityHeader'
import './City.less';
export default function City() {
  return (
    <div>
        {/* 头部 */}
       <CityHeader />
        {/* 当前城市 */}
         <div className="city-box">
            <div className="city-tile">
                当前城市
            </div>
            <div className="city-name">
                北京
            </div>
         </div>
        {/* 热门城市 */}
        <div className="city-box">
            <div className="city-tile">
                热门城市
            </div>
            <div className="city-name">
                北京
            </div>
         </div>
    </div>
  )
}
