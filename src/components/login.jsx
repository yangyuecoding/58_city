import React, { Component } from 'react';
import { MyLogin } from "../styled/login";
import { tologin } from "../api/register";
import qs from "qs";
import { Cookie } from "../utils/cookie";
import store from "../store/index";
import action from "../views/switchIndexStore/actionCreate";
import imtaction from "./immutable/actionCreate";
export default class login extends Component {
    constructor(){
        super()
        this.state = {
            flag:store.getState().indexreducer.showHead,
            pwdcls:false
        }
        // this.password = React.createRef();
    }
    // componentWillMount(){
    //     store.subscribe( ( ) => {
    //         this.setState({
    //             flag:store.getState().indexreducer.showHead
    //         },() => {
    //         })
    //     })
       
    // }
    componentWillMount(){
        store.subscribe( () => {
            console.log(store.getState().immutableReducer.toJS().info);
        })
    }
    componentDidMount(){
        store.dispatch(action.show(false));
        //测试 immutable 装入redux 
        store.dispatch(imtaction.imt_add("我是一个大帅哥"))
        // console.log(imtaction);
       
    }
    componentWillUpdate(){
        console.log(111111);
        console.log(store.getState().immutableReducer);
    }
    goback(){
        //让img 隐藏
        this.img.style.display = "none";
        this.props.history.go( -1 );
        store.dispatch(action.show(true));
    }
    toggcls(){
        let cls = !this.state.pwdcls;
        this.refs.pwd.type =  cls ? "text":"password";
        this.setState({
            pwdcls:cls
        })
        // console.log(this.refs.pwd);
    }
    toLogin(){
        console.log(this.uname.value,this.refs.pwd.value);
        if( this.uname.value !== "" && this.refs.pwd.value !== "" ){
            console.log("111");
            let userInfo = {
                uname:this.uname.value,
                password:this.refs.pwd.value
            }
            tologin(qs.stringify(userInfo)).then(ok => {
                console.log(ok);
                //设置一条保存用户登录信息的token
                if(ok.code === 200){
                    //保存cookie  在书架界面判断这条cookie  如果有效，就拉去这个用户的书架信息
                    Cookie("token",ok.body.token);
                }
                //登录成功跳转首页
                setTimeout( () => {
                    this.props.history.push("/index");
                },2000)
            })
            .catch( rej => {
                console.log(rej);
            })
        }
    }
    componentWillUnmount(){
        store.dispatch(action.show(true));
        this.setState = (state, callback) => {
            return;
          }
    }
    render() {
        return (
            <div>
                <MyLogin>
                    <div className="myHeader">
                        <p>
                            <i className=" iconfont icon-weibiaoti--1" onClick={ () => { this.goback() } }></i>
                        </p>
                            {/*  提示图片 点击删除 */}
                        <p className="topimg">
                        <img src="https://sta.gtimg.com/mobile/static/images/top_red_13.png" ref={ (ipt) => { this.img = ipt; } }alt="欢迎登录" />
                        </p>
                        <p className="mid_icon">
                            <img src="https://sta.gtimg.com/mobile/static/images/qd_icon.png" alt="11"/>
                        </p>
                        <div className="login_box">
                            <div>
                               <i className="iconfont icon-icon_zhanghao"></i> <input type="text" placeholder="请输入账号" ref={ (ipt) => { this.uname=ipt } }/>
                            </div>
                            <div>
                               <i className="iconfont icon-icon_zhanghao"></i> <input type="password" ref="pwd" placeholder="请输入密码"/>
                               <i className={ this.state.pwdcls? "iconfont icon-xianshimima2":"iconfont icon-yincangmima1"} onClick={ () => { this.toggcls() } }></i>
                               {/* iconfont icon-xianshimima2 icon-yincangmima1 */}
                            </div>
                            <p className="toregister">
                                <span>忘记密码</span>
                                <span onClick={ () => { this.props.history.push("/register")} }>用户注册</span>
                            </p>
                            <div id="login">
                                <button onClick={ this.toLogin.bind(this) } >登录</button>
                            </div>
                        </div>
                    </div>
                </MyLogin>
            </div>
        )
    }
}
