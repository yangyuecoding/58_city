/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 22:12:29
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 22:24:45
 */ 
const express = require("express");
const router = express.Router();
const userCol = require("../schema/getlistSchema");

router.get("/info",(req,res) => {
    console.log(req.query);
    userCol.find(req.query).then(ok => {
        res.send({code:200,body:ok});
    })
    .catch( rej => {
        res.send({code:200,body:rej});
    })
})
module.exports = router;