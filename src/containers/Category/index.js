import React, {Component} from 'react';
import {connect} from 'react-redux'
import TNavbar from "../../components/TNavbar/index";
<<<<<<< HEAD
import BNavbar from "../../components/BNavbar/index";
import Sidebar from "./Sidebar/index";
import Cate from "./Cate/index";
import actions from '../../store/actions/category'
// import {getCateList} from '../../api/getData'
@connect(
    state=>state.cateList,
    actions
)
export default class Category extends Component {
    constructor(){
        super();
        this.state={
            curName:'',
            bannerUrl:'http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png'

        }
    }
    componentDidMount(){
        if(this.props.cateList.length==0){
            this.props.fetchCateList();
        }
    }
    getCurCate=(curId,curName,bannerUrl)=>{
        this.setState({curName,bannerUrl});
        this.props.fetchCateList(curId);
        // console.log(curId,curName)

=======
import BNavBar from "../../components/BNavbar/index";
import Sidebar from "./Sidebar/index";
import Cate from "./Cate/index";
import {getCateList,getCateItem} from '../../api/getData'
export default class Category extends Component {
    componentDidMount(){
        let data=getCateList(1022001);
        console.log(data);
>>>>>>> 9dc1be2a45664145b1c684a5f9167bb54f09589f
    }
    render() {
        // console.log(this.props);
        return (
            <div className='category'>
                <TNavbar/>
<<<<<<< HEAD
                <Sidebar cateList={this.props.cateList}
                         getCurCate={this.getCurCate}
                         curId={this.props.curCategoryId}
                />
                <Cate subCateList={this.props.subCateList}
                      curName={this.state.curName}
                      bannerUrl={this.state.bannerUrl}
                      curCategoryId={this.props.curCategoryId}
                />
                <BNavbar/>
=======
                <Sidebar/>
                <Cate/>
                <BNavBar/>
>>>>>>> 9dc1be2a45664145b1c684a5f9167bb54f09589f
            </div>
        )
    }
}