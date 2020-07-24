import React, { Component } from 'react'
import store from "../store/index";
import actions from "../views/switchIndexStore/actionCreate";
export default class rank extends Component {
    componentWillUnmount(){
        console.log("组件销毁");
        //将store中的数重置为原本的值
        store.dispatch(actions.change(null));
        console.log(store.getState())
    }
    render() {
        return (
            <div>
                <h1>这个是排行榜界面</h1>
            </div>
        )
    }
}
