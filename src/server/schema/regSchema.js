/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-18 21:04:43
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-18 21:09:29
 */ 
//连接数据库

let db = require("../db");
const mongoose = require("mongoose");

//连接数据库
db();

//创建schema
var userSec = new mongoose.Schema({
    uname:{type:String},
    password:{type:String}
})

//绑定数据库集合
var userCol = mongoose.model("qdusers",userSec);

module.exports = userCol;

