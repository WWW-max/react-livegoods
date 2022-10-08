import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter/AppRouter';
// 引入初始化样式
import './assets/css/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
