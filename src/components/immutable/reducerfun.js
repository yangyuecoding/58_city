/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-23 01:20:18
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-23 01:41:12
 */ 

 import data from "./state";
 import { IMMUTABLE_ADD } from "./actionTypes.js";

 let reducer = (state=data,actions) => {
     switch(actions.type){
         case IMMUTABLE_ADD:
             return state.set("info",actions.info);
         default:
             return state;
     }
 }
 export default reducer;