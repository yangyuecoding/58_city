/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:31:12
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-17 14:39:41
 */ 
import { Index_GET } from "./actionTypes";

 let get = (list) => {
    return { type:Index_GET,list:list };
}
export default {
    get
}