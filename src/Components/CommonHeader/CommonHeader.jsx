import React from 'react';
import style from './CommonHeader.less';
import { withRouter, useHistory } from 'react-router-dom';
export default function CommonHeader(props) {
  let history = useHistory();
  // 返回上一页
  const back = () => {
    // 方式1->withRouter高价组件
    // props.history.goBack();
    // 方式2->hook
    history.goBack();
  }
  return (
    <div className='city-header'>
         <i className='iconfont icon-back' onClick={back} />
         <div className='title'>
            {/* 预留空间 */}
            {props.children}
         </div>
    </div>
  )
}
/**withRouter高价组件包裹CityHeader组件，增强CityHeader功能，使其props具有history属性 */
// export default withRouter(CityHeader);

