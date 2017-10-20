import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

@connect(
    state => state.session,
)
export default class extends Component {
    componentWillMount() {
        this._logined = JSON.parse(localStorage.getItem('logined'));
        console.log('获取登录状态', this._logined, typeof this._logined)
    }

    render() {
        console.log('渲染时', this._logined)
        let {component: Comp, ...rest} = this.props;
        return <Route {...rest} render={(props) => {
            return this._logined ? <Comp/> : <Redirect to={{
                pathname: "/login",
                state: {from: props.location}
            }}/>
        }}/>
    }

}





