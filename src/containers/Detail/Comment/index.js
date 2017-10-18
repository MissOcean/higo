import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../../store/actions/detail'
import Star from "../../../components/Star/index";
import './index.less'
import CommentItem from "../../../components/CommentItem/index";
import {upLoadMore, goBackToTop} from "../../../api/utils"

@connect(
    state => state.detail,
    actions
)
export default class Comment extends Component {
    constructor() {
        super()
        this.state = {hideTags: true}
    }

    componentWillMount() {
        this.props.getProductGoodRate(1127003)
        this.props.getCommentTags(1127003)
        !this.props.allComments.length && this.props.getCommentByTag(this.props.curTag, 1127003, 1)
    }

    toggleTags = () => {
        this.setState({...this.state, hideTags: !this.state.hideTags})
    }
    changeComments = (tag) => {
        //console.log(this.timer)
        if (this.timer) clearInterval(this.timer)
        this.timer = setTimeout(() => {
            this.props.getCommentByTag(tag, 1127003, 1)
        }, 200)
    }

    componentDidMount() {
        upLoadMore(() => {
            let {page, totalPage} = this.props.comments.pagination
            if (page === totalPage) return
            this.props.getCommentByTag(this.props.curTag, 1127003, this.props.comments.pagination.page + 1)
        })
        window.goTop = goBackToTop;
    }

    render() {
        let {hideTags} = this.state
        let {
            curTag,
            goodRate: {goodCmtRate, star},
            commentTags, allComments, isFetchComment,
            comments: {pagination: {page, totalPage}}
        } = this.props
        return (
            <div className="pageContent" ref="pageContent">
                <div className="goodRate">
                    <span className="text">评分</span>
                    <Star className="stars" star={star} fSize=".36rem"/>
                    <span className="rate">{goodCmtRate}</span>
                </div>
                <div className="tagPanel">
                    {commentTags.length > 0 &&
                    <ul className="tags" style={hideTags ? {height: '1.54rem', overflow: 'hidden'} : {}}>
                        {
                            commentTags.map((tag, idx) => (
                                <li className="tag" key={idx}
                                    style={curTag == tag.name ? {color: '#b4282d', borderColor: '#b4282d'} : {}}
                                    onClick={() => {
                                        this.changeComments(tag.name)
                                    }}>
                                    {`${tag.name}(${tag.strCount})`}
                                </li>
                            ))
                        }
                    </ul>}
                    <div className="toggleTags" onClick={this.toggleTags}>
                        <span className="toggleInfo">{hideTags ? '更多' : '收起'}</span>
                    </div>
                </div>
                <div className="commentPanel">
                    {
                        allComments.map((comment, idx) => (
                            <CommentItem key={idx} comment={comment} className="comment"/>
                        ))
                    }
                    {isFetchComment && <div className="commentLoading">正在加载 ...</div>}
                    {page && page == totalPage && <div className="commentOver">已经到底啦</div>}
                </div>
            </div>
        )
    }
}