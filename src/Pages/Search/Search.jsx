import React from 'react';
import { useHistory } from 'react-router-dom';
import CommonHeader  from '../../Components/CommonHeader/CommonHeader';
import MyInput from '../../Components/MyInput/MyInput';
import SearchList from './SearchList/SearchList';

export default function Search(props) {
  return (
    <div className='title'>
      {/* 公共头部 */}
        <CommonHeader>
            <MyInput />
        </CommonHeader>
        <div>
             获取参数：{props.match.params.val}
        </div>
        {/* 搜索列表 */}
        <SearchList />
    </div>
  )
}
