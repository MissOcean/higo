import React, {Component} from 'react';
import './index.less'
import MoreItem from "./MoreItem/index";

export default class More extends Component {


    render() {
        let moreItems = [
            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            },
            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            },
            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            },

            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            },
            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            },
            {
                itemPic: "http://yanxuan.nosdn.127.net/7b1d27c5ed80b000c7901f83fb9212ea.jpg?imageView&quality=75",
                itemDesc: "想要质感？先给材料升升级"
            }
        ];
        return (
            <div className="food-more">
                <div className="more-title">
                    更多精彩
                </div>
                {
                    moreItems.map((item, index) => (
                        <MoreItem {...item} key={index}/>
                    ))
                }
            </div>
        )
    }
}