/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:21:59
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-17 13:26:58
 */ 

import { createStore } from 'redux';
import reducer from "./reducerall";



//创建store 核心仓库
const store = createStore(reducer);
export default store;
