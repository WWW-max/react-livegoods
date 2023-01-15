import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const inputStyle ={
    height:'0.6rem',
    width:'100%',
    borderRadius:'0.1rem',
    paddingLeft:'0.2rem',
}
export default function MyInput() {
  const [val, setVal] = useState('');
  const history = useHistory();
  function inputValChange(e){
    setVal(e.target.value);
  }
  function getKeyUp(e){
    console.log('keyUp', e);
    if (e.keyCode === 13) {
      // 按回车，页面跳转，编程式路由跳转
      history.push(`/search/${val}`);
    }
  }
  return (
    <>
    <input style={inputStyle} value={val} onChange={inputValChange} onKeyUp={getKeyUp}/>
    </>
  )
}
