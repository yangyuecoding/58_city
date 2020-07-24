/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:21:59
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-23 01:42:42
 */ 
import {combineReducers} from "redux";
import indexreducer from "../views/switchIndexStore/reducer";
import immutableReducer from "../components/immutable/reducer";
let reducer = combineReducers({
    indexreducer,
    immutableReducer
})


export default reducer;