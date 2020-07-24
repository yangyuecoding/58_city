/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 16:04:44
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-24 00:28:44
 */ 

 //处理switch 返回函数逻辑
 export function SHOW (state,flag){
    return {...state,showHead:flag};
 }
 export function PUSH (state,flag){
   return {...state,list:flag};
}

export function HEADER(state,flag){
   return {...state,header_info:flag};
}
export function RENDER_TYPE_LIST(state,type){
   return {...state,typelist:type};
}