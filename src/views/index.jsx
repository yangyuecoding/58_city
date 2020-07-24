/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-16 23:40:59
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-21 16:19:11
 */ 
import React from "react";
import MyHeader from "../components/MyHeader";
import Router from "../router/index";
import store from "../store/index";
import { withRouter } from "react-router-dom";
//首页容器开始
 class index extends React.Component{
    constructor(){
        super();
        this.state = {
            flag:store.getState().indexreducer.showHead
        } 
    }
    componentDidMount(){
        // let _this = this;
        window.addEventListener("popstate", function(e) { 
            console.log("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
                //当使用 浏览器自带功能后退的时候  将 状态置位 true
                this.setState({
                    flag:store.getState().indexreducer.showHead,
                    
                })
            // store.dispatch(action.show(true));
            }.bind(this));
        store.subscribe(() => {
            this.setState({
                flag:store.getState().indexreducer.showHead
            })
        })
    
    }
    // componentWillUnmount() {
    //     //组件将要销毁时
    //     // console.log("组件销毁");
    //     //如果当前路由是在index 不关闭头部
    //     if(this.props.history.location.pathname === "/index") return false;
    //     let flag = !this.state.flag;
    //     this.setState({
    //         flag
    //     })
    // }
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
          }
    }
    showHeader(){
        // if(this.props.history.location.pathname !== "/index") return false;
        return  this.state.flag ? <MyHeader/>:" ";
    }
    render(){
        let path = this.props.history.location.pathname;
        return (
            // 头部
            <React.Fragment>
                {/* 隐藏头部 利用路由路径的判断  或者 在组件销毁的钩子函数 重新需改state数据 */}
                { (path === "/index" || path === "/fenlei" || path === "/rank")? this.showHeader()  :"" }
                <Router/>
            </React.Fragment>
        )
    }
}
export default withRouter(index);