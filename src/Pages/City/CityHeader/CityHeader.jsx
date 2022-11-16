import React from 'react';
import style from './CityHeader.less';
import { withRouter } from 'react-router-dom';
function CityHeader(props) {
  const back = () => {
    props.history.goBack();
  }
  return (
    <div className='city-header'>
         <i className='iconfont icon-back'></i>
         <div className='title' onClick={back}>
            城市选择
         </div>
    </div>
  )
}
/**withRouter高价组件包裹CityHeader组件，增强CityHeader功能，使其props具有history属性 */
export default withRouter(CityHeader);

