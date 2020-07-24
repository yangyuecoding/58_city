/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 15:24:26
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 22:19:19
 */ 
const express = require("express");
let app = express();
const port = 1017;
//导入路由
const regRouter = require("./router/reg");
const listRouter = require("./router/sexinfo");
//连接数据库
app.get("/",(req,res) => {
    res.send({code:100,detail:"欢迎来到首页"});
})

// cors解决跨域
app.use("/",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()//下一步
})
//中间件连接路由
app.use("/reg",regRouter);
app.use("/getlist",listRouter);

app.listen(port,() => {
    console.log( "服务器已经启动,监听了" + port );
})


