import React, { useEffect, useState } from 'react'
import CityHeader from './CityHeader/CityHeader'
import './City.less';
import { getHotCity } from '../../api';
export default function City() {
  const [hotCity, setHotCity] = useState([]); // 热门城市
  useEffect(() => {
    getCity()
  },[]);
  async function getCity() {
    try {
        const res = await getHotCity();
        if (res) {
            console.log(res);
            setHotCity(res.data.indexCitys.hot);
        }
    } catch (error) {
        console.log(error);
    }
  }
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
           {
              hotCity?.map(item  => <div className="city-name" key={item.id}>{item.name}</div>)
           }
         </div>
    </div>
  )
}
