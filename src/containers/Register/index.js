import React,{Component} from "react";
import "./index.less";
import BNavbar from "../../components/TNavbar/index";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/session";
@connect(
    state=>state.session,
    actions
)
export default class Register extends Component{
    handleClick=()=>{
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        this.props.register({username,password});
    };
    render(){
        return(
                <div>
                    <BNavbar/>
                    <ul className="register">
                        <li><input className="username" ref="username" type="text" placeholder="注册 用户名"/></li>
                        <li><input className="password" ref="password" type="text" placeholder="密码"/></li>
                        <li><button className="login-btn" onClick={this.handleClick}>注 册</button></li>
                        <li className="register"><Link to="/login">已有账号</Link></li>
                    </ul>
                </div>
        )
    }
}
