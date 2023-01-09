import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter/AppRouter';

// 连接 redux() 跟component
import { Provider } from 'react-redux';
// 引入仓库
import store from './store/index';
// 引入初始化样式
import './assets/css/reset.css';
import { setCityAction } from './store/action/action';

if (localStorage.getItem('city')){
  store.dispatch(setCityAction(localStorage.getItem('city')))
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
