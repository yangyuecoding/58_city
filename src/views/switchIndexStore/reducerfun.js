/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:31:49
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-24 00:27:23
 */ 
import { Index_GET, Index_SHOW,Index_PUSH,INDEX_HEADER_INFO,TYPE_LIST } from "./actionTypes";
import data from "./state";
//导入 处理函数逻辑
import { SHOW,PUSH,HEADER,RENDER_TYPE_LIST } from "./retunState";
let reducer = (stata=data,actions) => {
    switch(actions.type){
        case Index_GET:
            return {...data,arr:[actions.list]};
        case Index_SHOW:
            return SHOW(stata,actions.flag);
        case Index_PUSH:
            return PUSH(stata,actions.list);
        case INDEX_HEADER_INFO:
            return HEADER(stata,actions.headerinfo);
        case TYPE_LIST:
            return RENDER_TYPE_LIST(stata,actions.typelist);
        default:
            return stata;
    }
}

export default reducer;