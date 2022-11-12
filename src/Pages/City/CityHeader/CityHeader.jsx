import React from 'react';
import style from './CityHeader.module.less';

export default function CityHeader() {
  return (
    <div className={style['city-header']}>
         <i className='iconfont icon-back'></i><br/>
         <div className={style.title}>
            城市选择
         </div>
    </div>
  )
}

