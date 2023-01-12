import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MyCarousel from '../../Components/MyCarousel/MyCarousel';
import HomeHeader from './HomeHeader/HomeHeader';
import banner1 from '../../assets/img/banner1.jpeg';
import banner2 from '../../assets/img/banner2.jpeg';
import banner3 from '../../assets/img/banner3.jpeg';
import banner4 from '../../assets/img/banner4.jpeg';
import { getBanner, getHotHouse } from '../../api';
import './Home.less';
import House from './House/House';

const list = [banner1, banner2, banner3, banner4];

function Home(props) {
  // 定义变量
  let [list, setList] = useState([]); // 轮播图
  let [houses, sethouses] = useState([]); // 热门房源
  // useEffect(async () => {
  //   // 发送请求
  //   // getBanner().then(res => {
  //   //   console.log(res);
  //   //   setList(res.banner);
  //   // }).catch(err => {
  //   //   console.log(err);
  //   // })
  //   // async await方式发送请求
  //   try {
  //     const res = await getBanner();
  //     setList(res.banner);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },[]);
  useEffect(() => {
    getBannerList();
    getHotHouseList();
  }, []);
  /**
   * 获取轮播图列表
   */
  const getBannerList = async () => {
    try {
      const res = await getBanner();
      setList(res.banner);
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 获取热门房源
   */
  async function getHotHouseList() {
    try {
      const res = await getHotHouse({city: props.city});
      sethouses(res.list); 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {/* 头部区域*/}
      <HomeHeader city={props.city} />
      {/* 轮播图 */}
      <MyCarousel list={list}/>
      {/* 找室友 */}
      <div className="navs">
        <div className="item">找室友</div>
        <div className="item">宜居社区</div>
      </div>
      {/* 热门房源 */}
      <House list={houses}/>
    </div>
  )
}

export default connect(state => ({
  city: state.cityName,
}))(Home);