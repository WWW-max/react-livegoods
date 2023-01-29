import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../../api';
import CommonHeader  from '../../Components/CommonHeader/CommonHeader';
import MyInput from '../../Components/MyInput/MyInput';
import SearchList from './SearchList/SearchList';

function Search(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getSearchList(){
      try {
        const res = await getSearch({city: props.city, val: props.match.params.val });
        console.log('res->', res);
        setList(res?.list);
      } catch (error) {
        console.error(error);
      }
    }
    getSearchList();
  }, [props.city, props.match.params.val]);


  return (
    <div className='title'>
      {/* 公共头部 */}
        <CommonHeader>
            <MyInput val={props.match.params.val}/>
        </CommonHeader>
        <div>
             获取参数：{props.match.params.val}
        </div>
        {/* 搜索列表 */}
        <SearchList list={list}/>
    </div>
  )
}

export default connect(state => ({
  city: state.city,
}))(Search);
