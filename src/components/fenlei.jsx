import React, { Component } from 'react'
import store from "../store/index";
import actions from "../views/switchIndexStore/actionCreate";
import {connect} from "react-redux";
 class fenlei extends Component {
    componentWillUnmount(){
        console.log("组件销毁");
        //将store中的数重置为原本的值
        store.dispatch(actions.change(null));
        // console.log(store.getState())
    }
    componentDidMount(){
        console.log(this.props.state);
    }
    render() {
        return (
            <div>
                <h1>这个是分类组件</h1>
            </div>
        )
    }
}
export default connect( (state) => ({state:state}) )(fenlei);