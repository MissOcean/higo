import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.less'
export default class Sidebar extends Component {
    render() {
        return (
            <div className="side_bar">
                <ul>
                    <li>
                        <a>
                            推荐区
                        </a>
                    </li>
                    <li>
                        <a>
                            秋季专区
                        </a>
                    </li>
                    <li>
                        <a>
                            出行专区
                        </a>
                    </li>
                    <li>
                        <a>
                            居家
                        </a>
                    </li>
                    <li>
                        <a>
                            餐厨
                        </a>
                    </li>
                    <li>
                        <a>
                            配件
                        </a>
                    </li>
                    <li>
                        <a>
                            服装
                        </a>
                    </li>
                    <li>
                        <a>
                            电器
                        </a>
                    </li>
                    <li>
                        <a>
                            洗护
                        </a>
                    </li>
                    <li>
                        <a>
                            杂货
                        </a>
                    </li>
                    <li>
                        <a>
                            饮食
                        </a>
                    </li>
                    <li>
                        <a>
                            婴童
                        </a>
                    </li>
                    <li>
                        <a>
                            志趣
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}