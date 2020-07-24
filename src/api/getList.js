/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 22:31:35
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 22:34:25
 */ 
import service from "../utils/MyAxios";
export function getList(sex){
    return new Promise( (resolve,reject) => {
        service.request({
            url:"/api/getlist/info",
            params:sex
        })
        .then( ok => {
            resolve(ok.data);
        })
        .catch( rej => {
            reject(rej);
        })
    })
}