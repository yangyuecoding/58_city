/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 02:25:34
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 02:28:12
 */ 

function isObject(obj) {
    return (typeof obj === "object" && obj !== null && obj.constructor && obj.constructor === Object);
}
export function Cookie(name, value, options) {
   
    if (arguments.length > 1 && typeof value === "string") {
        //设置cookie
        if (!isObject(options)) {
            options = {}
        }
        // console.log(name,value,options);
        if (typeof options.expires === "number") {
            var d = new Date();
            d.setDate(d.getDate() + options.expires);
            console.log(options.expires);
        }
        return document.cookie = [
            name + "=" + value,
            typeof options.domain === "string" ? ";domain=" + options.domain : "",
            typeof options.path === "string" ? ";path=" + options.path : "",
            typeof options.expires === "number" ? ";expires=" + d : "",
        ].join("");
    }
    //获取cookie
    var cookie_str = document.cookie;
    //  console.log(cookie_str);
    var cookie_arr = cookie_str.split("; ");
    for (var i = 0; i < cookie_arr.length; i++) {
        if (cookie_arr[i].split("=")[0] === name) {
            return cookie_arr[i].split("=")[1];
        }
    }
}
