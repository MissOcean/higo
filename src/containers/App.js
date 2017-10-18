/* App */
import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Home/index";
import Cart from "./Cart/index";
import Topic from "./Topic/index";
import Category from "./Category/index";
import User from "./User/index";
import BNavBar from "../components/BNavbar/index";
import {ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
import '../api/rem'
import '../common/style/reset.less'
import TNavbar from "../components/TNavbar/index";
import Detail from "./Detail/index";

export default class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/category" component={Category}></Route>
                        <Route path="/detail" component={Detail}></Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}