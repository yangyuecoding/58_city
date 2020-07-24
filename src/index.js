/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-16 22:36:08
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-23 23:41:12
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/index';
import * as serviceWorker from './serviceWorker';
import "./icon/iconfont.css";
import { BrowserRouter } from "react-router-dom";
import "./swiper3.4.2.css";
//引入context组件
import { MyContext } from "./context/MyContext";
//引入react-redux 的模式
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <Provider store={ store }>
  <MyContext>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </MyContext>
    </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
