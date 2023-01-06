import React, { useEffect, useState } from 'react'
import CityHeader from './CityHeader/CityHeader'
import { connect } from 'react-redux';
import './City.less';
import { getHotCity } from '../../api';
function City(props) {
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
  console.log('props', props);
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
                {props.cityName}
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

export default connect(state => ({
  cityName: state.city,
}))(City);