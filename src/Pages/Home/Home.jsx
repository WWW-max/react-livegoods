import React from 'react';
import MyCarousel from '../../Components/MyCarousel/MyCarousel';
import HomeHeader from './HomeHeader/HomeHeader';
import banner1 from '../../assets/img/banner1.jpeg';
import banner2 from '../../assets/img/banner2.jpeg';
import banner3 from '../../assets/img/banner3.jpeg';
import banner4 from '../../assets/img/banner4.jpeg';

const list = [banner1, banner2, banner3, banner4];

export default function Home() {
  return (
    <div>
      {/* 头部区域*/}
      <HomeHeader />
      {/* 轮播图 */}
      <MyCarousel list={list}/>
      {/* 找室友 */}
      {/* 热门房源 */}
    </div>
  )
}
