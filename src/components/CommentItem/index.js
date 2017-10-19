import React, {Component} from 'react';
import {connect} from 'react-redux'
import TNavbar from "../../components/TNavbar/index";
import {Link} from 'react-router-dom'
import './index.less'
import {fomateDate} from "../../api/utils"
import Star from "../Star/index";
@connect()
export default class CommentItem extends Component {
    render() {
        let comment = this.props.comment;
        return (
            <div className="commentItem">
                <div className="userInfo">
                    {!comment.frontUserAvatar && <div className="userAvatar">
                        <i className="iconfont icon-people"></i>
                    </div>}
                    {comment.frontUserAvatar && <img className="userAvatar" src={comment.frontUserAvatar}/>}
                    <div className="userName">{comment.frontUserName}</div>
                    <span className="memberLevel">V{comment.memberLevel}</span>
                    <Star star={comment.star}/>
                </div>
                <div className="extraInfo">
                    <span className="createAt">{fomateDate(comment.createTime)}</span>
                    {comment.skuInfo.map((info,idx)=>(
                        <span key={idx} className="skuInfo">{info}</span>
                    ))}
                </div>
                <div className="content">{comment.content}</div>
                <div className="commentPic">
                    <ul className="picPanel">
                        {comment.picList.map((picSrc,idx)=>(
                            <li className="pic" key={idx}>
                                <img src={picSrc} alt=""/>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
    )
    }

    }