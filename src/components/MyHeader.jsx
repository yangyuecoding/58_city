import React, { Component } from 'react';
import { Headercls } from "../styled/header";
import { withRouter } from "react-router-dom";
import store from "../store/index";
import { getList } from "../api/getList";
import action from "../views/switchIndexStore/actionCreate";
import { Consumer } from "../context/MyContext";
 class MyHeader extends Component {
     constructor(){
         super();
         this.state = {
            flag:store.getState().indexreducer.showHead,
            sex:"booy",
            header:""
         }
     }
    componentDidMount(){
        //调用传过来的函数
        getList({sex:this.state.sex}).then( ok => {
            //将数据存放到redux中 PUSH 方法
            store.dispatch(action.push(ok.body));
        })
        .catch( rej => {
            console.log(rej);
        })
        store.subscribe( () => {
            this.setState({
                flag:store.getState().indexreducer.showHead,
                header:store.getState().indexreducer.header_info
            })
        })
        //刷新 状态保留
        window.addEventListener( "beforeunload",this.keepalive.bind(this));
    }
 
    keepalive(){
      window.localStorage.setItem("hello","hhh");
    }
    toLogin(){
        this.props.history.push("/login");
        //跳转并隐藏头部
        let flag = !this.state.flag;
        store.dispatch(action.show(flag));
    }
    toBooks(){
        this.props.history.push("/books");
    }
    toIndex(){
        this.props.history.push("/index");
    }
    componentWillUnmount(){
        //v 卸载组件的话 返回
        this.setState = (state, callback) => {
            return;
          }
    }
    dongingheader(){
        if( this.state.header){
            return(
                <div>
                    <i className="iconfont icon-weibiaoti--1 far" onClick={ () => { this.goback() } }></i>
                    <span>{this.state.header}</span>
                </div>
            )
        }else{
            return <span onClick={ this.toIndex.bind(this) }>起点中文网</span>;
        }
    }
    goback(){
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>               
                <Consumer>
                    {
                        (val) => {
                            console.log(val);
                        }
                    }
                </Consumer>
                {/* 头部切换男女生分类 */}
                <Headercls>
                <ul>
                    <li>
                        {/* 条件渲染 */}
                       { this.dongingheader() }
                    </li>
                    <li className="midToggle">
                        <span className="active">男生</span>
                        <span>女生</span>
                    </li>
                    <li>
                       <p>
                            <i onClick={ () => { this.toLogin() } } className=" iconfont icon-icon-test4 login"></i>
                            <i onClick={ this.toBooks.bind(this)  } className=" iconfont icon-icon-test5 books"></i>
                       </p>
                    </li>
               
                </ul>
                </Headercls>
            </div>
        )
    }
}
export default withRouter(MyHeader);
