import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

@connect(
    state => state.session,
)
export default class extends Component {
    render() {
        let {component: Comp, ...rest} = this.props;
        return <Route {...rest} render={(props) => {
            return this.props.user ? <Comp/> : <Redirect to={{
                pathname: "/login",
                state: {from: props.location}
            }}/>
        }}/>
    }

}





