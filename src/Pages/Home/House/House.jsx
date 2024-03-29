import React from 'react';
import img from '../../../assets/img/banner1.jpeg';
import style from './House.module.less';
export default function House(props) {
  return (
    <div className={style.house}>
        <h3 className={style.title}>热门房源1</h3>
        <ul className={style.list}>
            {
                props.list.map(item => {
                    return (
                        <li className={style.item} key={item.id}>
                            <img src={item.imgUrl} alt="" height={200} width='100%'/>
                            <div className={style.info}>
                                <div className={style.desc}>
                                    <div>{item.address}</div>
                                    <div>{item.huxing}</div>
                                </div>
                                <div className={style.type}>
                                    <span className={style.zu}>{item.type}</span>
                                    <div className={style.price}>{item.price}</div>
                                </div>
                            </div>
                        </li>  
                    )
                } )
            }
        </ul>
    </div>
  )
}
