import React, {Component} from "react";
import {Link} from "react-router-dom";
import BNavbar from "../../components/TNavbar/index";
import "./index.less";
import actions from "../../store/actions/session";
import {connect} from "react-redux";
@connect(
    state => state.session,
    actions
)
export default class Login extends Component {
    constructor() {
        super()
        this.state = {username: ''}
    }

    componentWillMount() {
        console.log(this.props);
        let username = this.props.user ? this.props.user.username : '';
        console.log(username)
        username && this.setState({username})
    }

    handleClick = () => {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.login({username, password});
    };

    render() {

        return (
            <div>
                <BNavbar/>
                <ul className="login">
                    <li><input value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}}
                               className="username" ref="username" type="text" placeholder="用户名"/></li>
                    <li><input className="password" ref="password" type="text" placeholder="密码"/></li>
                    <li>
                        <button className="login-btn" onClick={this.handleClick}>登 录</button>
                    </li>
                    <li className="register"><Link to="/register">注册账号</Link></li>
                    <li className="forget-password"><Link to="/password">忘记密码</Link></li>
                    {/*<li>*/}
                        {/*<div className="hint">*/}
                            {/*{this.props.success}*/}
                            {/*{this.props.error}*/}
                        {/*</div>*/}
                    {/*</li>*/}
                </ul>
            </div>

        )
    }
}

