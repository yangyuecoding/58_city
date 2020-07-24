/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-18 21:25:43
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 01:50:41
 */ 
import axios from "axios";
 import service from "../utils/MyAxios";

export function addUser(data){
    return new Promise( (resolve,reject) => {
        service.request({
            url:"/api/reg/register",
            method:"post",
            data
        })
        .then(ok => {
            resolve(ok);
        })
        .catch(rej => {
            reject(rej);
        })
    })
}

export function getMap(){
    return new Promise(( resolve,reject) => {
        axios.get("/api?v=2.0&ak=4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa")
        .then(ok => {
            resolve(ok);
        })
        .catch( rej => {
            reject(rej);
        })
    })
}

// 登录
export function tologin(data){
    return new Promise( (resolve,reject)  => {
        service.request({
            url:"/api/reg/login",
            method:"post",
            data
        })
        .then( ok => {
            resolve(ok.data);
        })
        .catch( rej => {
            reject(rej);
        })
    })
}