import React, { Component } from 'react';
import {Regcls} from "../styled/register";
import { addUser} from "../api/register";
import { animate } from "../utils/myUtils";
import qs from "qs";
//导入qs模块 解析参数为urlencode
export default class register extends Component {
    constructor(){
        super();
        this.rePwd = React.createRef();
        this.state = {
            showTips:false,
            rvcode:5
        }
    }
    goback(){
        this.props.history.go(-1);
    }
    reg(){
        //获取用户名
        let uname = this.uname.value;
        //获取密码框
        let password = this.refs.password.value;
        //获取确认密码框
        let rePwd = this.rePwd.current.value;
        // console.log(uname,password,rePwd);
        // 验证用户名 与密码
        if( !(password === rePwd) ) return false; 
        if(this.judgeUname(uname) && this.judgePwd(password)){
            console.log("前端验证成功,开始登录");
            let data = {
                uname,
                password
            }
            addUser(qs.stringify(data))
            .then( ok => {
                console.log(ok.data);
                let isSHow = false;
                let timer = null;
                if(ok.data.code === 200){
                    //如果状态码正常，来个提示，跳转到登录页面
                //显示盒子
                this.setState({
                    showTips:true
                },() => {
                    isSHow= true;
                })
                //js控制元素的宽高
                this.box.style.cssText = `
                    width:${window.innerWidth}px;
                    height:${window.innerHeight}px;
                `
                //当容器显示后 ，开始倒计时
                timer = setInterval( () => {
                    let num = this.state.rvcode;
                    num--;
                    this.setState({
                        rvcode:num
                    })
                    if( num === 0 ){
                        clearInterval(timer);
                        this.props.history.go(-1);
                    }
                },1000)
                }
            })
            .catch( rej => {
                console.log(rej);
            })
        }
    }
    judgeUname(name){
        // var reg = /^[a-zA-z0-9]$/;
        var reg = /^\w{4,16}$/;
        return reg.test(name);
    }
    judgePwd(pwd){
        var reg = /^\w{4,16}$/;
        return reg.test(pwd);
    }
    render() {
        return (
            <div>
                <Regcls>
                <div id="myINdex">
                    <p className="topbar">
                        <i className=" iconfont icon-weibiaoti--1" onClick={ () => { this.goback() } }></i>
                        <span>手机注册</span>
                    </p>
                    <div className="reg_box">
                            <p><input type="text" placeholder="请输入用户名或邮箱" ref={ (ipt) => { this.uname=ipt } } /></p>
                            <p><input type="text" placeholder="请输入密码" ref="password" /></p>
                            <p><input type="text" placeholder="请确认密码" ref={ this.rePwd }/></p>
                        <div className="ok" onClick={ () => { this.reg() } }>
                            注册
                        </div>
                    </div>
                    {/* 登录盒子  默认隐藏*/}
                    <div ref={ (box) => { this.box = box; }} className={ this.state.showTips?"show":"hide" }>
                        <div className="okTips">
                            登录成功{ this.state.rvcode }秒后跳转登录页
                            <p className="nowating">不想等待,请点击立即跳转
                                <span className="gonow" onClick={ () => {this.props.history.go(-1) } }>登录</span>
                            </p>
                        </div>
                    </div>
                </div>
                </Regcls>
            </div>
        )
    }
}
