/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 13:31:12
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-24 00:17:05
 */ 
import { Index_GET,Index_SHOW,Index_PUSH,INDEX_HEADER_INFO,TYPE_LIST } from "./actionTypes";

 let get = (list) => {
    return { type:Index_GET,list:list };
}
let show = (flag) => {
    return {type:Index_SHOW,flag:flag };
}
let push = (list) => {
    return {type:Index_PUSH,list };
}
let change = (headerinfo) => {
    return { type:INDEX_HEADER_INFO,headerinfo };
}
let rendertype = (typelist) => {
    return {type:TYPE_LIST,typelist};
}
export default {
    get,
    show,
    push,
    change,
    rendertype
}