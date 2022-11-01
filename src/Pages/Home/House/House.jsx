import React from 'react';
import img from '../../../assets/img/banner1.jpeg';
import style from './House.module.less';
export default function House() {
  return (
    <div className={style.house}>
        <h3 className={style.title}>热门房源</h3>
        <ul className={style.list}>
            <li className={style.item}>
                <img src={img} alt="" height={200} width='100%'/>
                <div className={style.info}>
                    <div className={style.desc}>
                        <div>东城区-xxx</div>
                        <div>一室一厅</div>
                    </div>
                    <div className={style.type}>
                        <span className={style.zu}>整租</span>
                        <div className={style.price}>5000</div>
                    </div>
                </div>
            </li>
            <li className={style.item}>
                <img src={img} alt="" height={200} width='100%'/>
                <div className={style.info}>
                    <div className={style.desc}>
                        <div>东城区-xxx</div>
                        <div>一室一厅</div>
                    </div>
                    <div className={style.type}>
                        <span className={style.zu}>整租</span>
                        <div className={style.price}>5000</div>
                    </div>
                </div>
            </li>
            <li className={style.item}>
                <img src={img} alt="" height={200} width='100%'/>
                <div className={style.info}>
                    <div className={style.desc}>
                        <div>东城区-xxx</div>
                        <div>一室一厅</div>
                    </div>
                    <div className={style.type}>
                        <span className={style.zu}>整租-</span>
                        <div className={style.price}>5000</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
