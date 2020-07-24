/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 15:24:38
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-18 21:01:48
 */ 
//连接数据库
const mongoose = require('mongoose');

//使用mongoose 连接数据库
function linkServer(database="userlist"){
    mongoose.connect("mongodb://localhost:27017/"+database,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useNewUrlParser: true 
    });
    let db = mongoose.connection;
    db.on("err",console.error.bind(console,"服务器连接失败"));
    db.once("open",() => {
        console.log("服务器连接成功")
    })
    return db;
}

module.exports = linkServer;