import React, { useRef, useEffect } from 'react';

export default function LoadMore(props) {
  // 定义ref
  const myRef = useRef();
  useEffect(() => {
    // 窗口高度
    let clientHeight = document.documentElement.clientHeight;
    // 滚动事件
    window.addEventListener('scroll', scrollFn);
    let flag = true;
    function scrollFn() {
       // 获取DOM元素距离浏览器顶部的距离（相当于文档高度）
       let divHeight = myRef.current.offsetTop;
       // 卷起高度
       let scrollTop = document.documentElement.scrollTop;
       if ((scrollTop + clientHeight) >= divHeight && flag) {
        console.log('重新加载。。。');
        flag = false;
        props.loadData(props.pageNum);
       }
    }
  }, []);
    
  return (
    <div ref={myRef}>
        加载更多......
    </div>
  )
}
