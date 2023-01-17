import React, { useEffect, useState } from 'react'
import CityHeader from './CityHeader/CityHeader'
import { connect } from 'react-redux';
import './City.less';
import { getHotCity } from '../../api';
import { setCityAction } from '../../store/action/action';
import CommonHeader from '../../Components/CommonHeader/CommonHeader';
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
  function selectCity (name){
    // 存到redux
    props.setCity(name);
    // 跳转页面
    props.history.goBack();
    // 持久化
    localStorage.setItem('city',name);
  }
  return (
    <div>
        {/* 头部 */}
       <CommonHeader>城市选择</CommonHeader>
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
              hotCity?.map(item  => <div className="city-name" key={item.id} onClick={selectCity.bind(null,item.name)}>{item.name}</div>)
           }
         </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (name) =>{ dispatch(setCityAction(name))}
  }
}
export default connect(state => ({
  cityName: state.city,
}), mapDispatchToProps)(City);