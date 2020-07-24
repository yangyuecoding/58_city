/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:31:49
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-17 14:53:31
 */ 
import { Index_GET } from "./actionTypes";
import data from "./state";

let reducer = (stata=data,actions) => {
    console.log(actions);
    switch(actions.type){
        case Index_GET:
            return {...data,arr:[actions.list]};
        default:
            return stata;
    }
}

export default reducer;