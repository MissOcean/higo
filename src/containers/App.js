/* App */
import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Home/index";
import Cart from "./Cart/index";
import Food from "./Food/index";
import Category from "./Category/index";
import User from "./User/index";
import BNavBar from "../components/BNavbar/index";
//import {ConnectedRouter} from 'react-router-redux'
import '../api/rem'
import '../common/style/reset.less'
import './App.less'
import TNavbar from "../components/TNavbar/index";
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route path="/topic" component={Food}></Route>
                                <Route path="/cart" component={Cart}></Route>
                                <Route path="/user" component={User}></Route>
                                <Route path="/category" component={Category}></Route>
                            </Switch>
                        </div>
                        <BNavBar/>
                    </div>
                </Router>
            </div>

        )
    }
}