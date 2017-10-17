let express = require('express')
let apiRoutes = express.Router()
let configs = {
    //主页数据
    recommendRoute: '/getRecommendData',
    recommendUrl: 'https://m.you.163.com/',
    //分类数据
    cateItemRoute: '/getCateItem',
    cateItemUrl: 'https://m.you.163.com/item/list',
    //分类页分类数据
    cateListRoute: '/getCateList',
    cateListUrl: 'http://m.you.163.com/item/cateList',
    //商品详情
    productDetailRoute: '/getProductDetail',
    productDetailUrl: 'https://m.you.163.com/item/detail',
    //根据商品获取推荐
    rcmdByProductRoute: '/getRcmdByProduct',
    rcmdByProductUrl: 'http://m.you.163.com/xhr/wapitem/rcmd.json',
    //好评，post，ecodedurl
    productGoodRateRoute: '/getProductGoodRate',
    productGoodRateUrl: 'http://m.you.163.com/xhr/comment/itemGoodRates.json',
    //评价标签，post,ecodedurl
    commentTagsRoute: '/getCommentTags',
    commentTagsUrl: 'http://m.you.163.com/xhr/comment/tags.json',
    //根据tag获取评论
    commentByTagRoute: '/getCommentByTag',
    commentByTagUrl: 'http://m.you.163.com/xhr/comment/listByItemByTag.json',
    //专题页数据
    topicRoute: '/getTopicData',
    topicUrl: 'http://m.you.163.com/topic/index',
}
let axios = require('axios');
let ecode = require('querystring')
//获取主页数据
apiRoutes.get(configs.recommendRoute, (req, res) => {
    let url = configs.recommendUrl;
    axios.get(url, {
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
//获取分类项目数据
apiRoutes.get(configs.cateItemRoute, (req, res) => {
    let url = configs.cateItemUrl;
    axios.get(url, {
        params: req.query
    }).then(response => {
        let curCategoryId = response.data.data.categoryL1.id;
        let subCateList = response.data.data.categoryL2List;
        let categoryItems = response.data.data.categoryItems;
        subCateList = subCateList.map(subCategory => {
            let {name, bannerUrl, id} = subCategory
            return {name, bannerUrl, id}
        })
        res.json({subCateList, curCategoryId, categoryItems})
    }).catch(e => console.log(e))
})
//获取分类页分类列表
apiRoutes.get(configs.cateListRoute, (req, res) => {
    let url = configs.cateListUrl;
    console.log(req.query)
    axios.get(url, {
        params: req.query
    }).then(response => {
        let categoryL1List = response.data.data.categoryL1List;
        let cateList = categoryL1List.map(category => {
            let {name, bannerUrl, id} = category
            return {name, bannerUrl, id}
        })
        let curCategoryId = response.data.data.currentCategory.id;
        let subCateList = response.data.data.categoryL2List;
        //res.json(response.data)
        res.json({cateList, curCategoryId, subCateList})
    }).catch(e => console.log(e))
})
//获取商品详情
apiRoutes.get(configs.productDetailRoute, (req, res) => {
    let url = configs.productDetailUrl;
    axios.get(url, {
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
//根据商品获取推荐
apiRoutes.get(configs.rcmdByProductRoute, (req, res) => {
    let url = configs.rcmdByProductUrl;
    axios.post(url, ecode.stringify(req.query)).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})

//获取商品好评度
apiRoutes.get(configs.productGoodRateRoute, (req, res) => {
    let url = configs.productGoodRateUrl;
    axios.post(url, ecode.stringify(req.query)).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
//获取评论页标签
apiRoutes.get(configs.commentTagsRoute, (req, res) => {
    let url = configs.commentTagsUrl;
    axios.post(url, ecode.stringify(req.query)).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
//根据tag获取评论
apiRoutes.get(configs.commentByTagRoute, (req, res) => {
    let url = configs.commentByTagUrl;
    axios.get(url, {
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
apiRoutes.get(configs.topicRoute, (req, res) => {
    let url = configs.topicUrl;
    axios.get(url, {
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => console.log(e))
})
module.exports = apiRoutes;