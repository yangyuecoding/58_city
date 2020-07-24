import React, { Component } from 'react';
import Login from "../components/login";
import Books from "../components/books";
import Index from "../views/switchIndex";
import Reg from "../components/register";
import Serach from "../components/serach";
import Rank from "../components/rank";
import Fenlei from "../components/fenlei"
import {Route,Switch,Redirect} from "react-router-dom";
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
            {/* 配置路由规则 */}
            <Switch>
                <Route path="/index" component={ Index }></Route>
                <Route path="/login" component={ Login }></Route>
                <Route path="/books" component={ Books }></Route>
                <Route path="/register" component={ Reg }></Route>
                <Route path="/serach" component={ Serach }></Route>
                <Route path="/fenlei" component={ Fenlei }></Route>
                <Route path="/rank" component={ Rank }></Route>
                <Redirect from="/" to="/index" exact></Redirect>
            </Switch>
        </React.Fragment>
        )
    }
}
