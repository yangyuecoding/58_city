/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 22:09:12
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 22:12:03
 */ 
const db = require("../db");
const mongoose = require("mongoose");

//连接数据库
db();

//创建schema
var userSchema = new mongoose.Schema({

});
let userCol = mongoose.model("sexinfo",userSchema);

module.exports = userCol;