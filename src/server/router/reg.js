/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-18 21:10:21
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 02:31:59
 */ 

 const express = require("express");
 const router = express.Router();
 //引入加密功能
 const crypto = require("crypto");
//引入解析post
const bodyparser = require("body-parser");
//在路由中解析urlencode 格式数据
const uE = bodyparser.urlencoded({extended:true});
//引入token功能
const jwtoken = require("jsonwebtoken");
//引入绑定集合
const userCol = require("../schema/regSchema");

router.post("/register",uE,(req,res) => {
    console.log(req.body);
    //先查询数据库
    userCol.find({"uname":req.body.uname})
    .then( (ok) =>{
        if( ok.length === 1 ){
            //查找到了
            res.send({code:400,detail:"用户名重名"});
        }else{
            //否则插入数据
            var userInfo = new userCol({
                uname:req.body.uname,
                password:crypto.createHash('md5').update(req.body.password).digest('hex')
            })
            userInfo.save( ).then( ok => {
                res.send({code:200,detail:{
                    data:ok
                }})
            })
            .catch( rej => {
                res.send({code:300,detail:{
                    data:"数据插入失败"+rej
                }})
            })
            
        }
    })
    .catch( rej => {
        res.send({code:500,detail:"服务器错误"})
    })
   
})


//登录路由
router.post("/login",uE,(req,res) => {
    //token 密文
    let myCode = "yangyueshiyigedashuaige";
    let userinfo =  {
        uname:req.body.uname,
        password:crypto.createHash('md5').update(req.body.password).digest('hex')
    }
    let token = jwtoken.sign(userinfo,myCode);
    userCol.find(userinfo).then( ok => {
        res.send({
            code:200,
            detail:"登录成功",
            body:{
                data:1,
                token,
            }
        })
    })
    .catch( rej => {
        res.send({
            code:400,
            detail:"该用户为注册，请先注册",
            body:{
                data:0,
                token:""
            }
        })
    })
})

module.exports = router;