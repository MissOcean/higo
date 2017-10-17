/* 数据接口 */
import axios from 'axios';

//home-recommend
export function getRecommendData() {
    const url = 'http://localhost:9090/api/getRecommendData'
    return axios.get(url).then(res => {
        return Promise.resolve(res.data)
    })
}

/* 分类项目列表 (主页、分类页用到)*/
export function getCateItem(categoryId, subCategoryId) {
    //get:http://localhost:9090/api/getCateItem?categoryId=xxx&subCategoryId=xxxx
    const url = 'http://localhost:9090/api/getCateItem'
    return axios.get(url, {
        params: {
            categoryId, subCategoryId
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

/* 获取分类列表 (分类页用到)*/
export function getCateList(categoryId) {
    //get:http://localhost:9090/api/getCateList?categoryId=xxx
    const url = 'http://localhost:9090/api/getCateList'
    return axios.get(url, {
        params: {
            categoryId
        }
    }).then(res => {
        //console.log(res.data)
        return Promise.resolve(res.data)
    })
}


//detail-product
export function getProductDetail(productId) {
    //get:http://localhost:9090/api/getProductDetail?id=xxx
    const url = 'http://localhost:9090/api/getProductDetail'
    return axios.get(url, {
        params: {
            id: productId
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

//detail-product-rcmd
export function getRcmdByProduct(id) {
    //get:http://localhost:9090/api/getRcmdByProduct?id=1241017
    const url = 'http://localhost:9090/api/getRcmdByProduct'
    return axios.get(url, {
        params: {
            id
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

//detail-goodRate
export function getProductGoodRate(productId) {
    //get:http://localhost:9090/api/getProductGoodRate?itemId=xxx
    const url = 'http://localhost:9090/api/getProductGoodRate'
    return axios.get(url, {
        params: {
            itemId: productId
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

//detail-comment-tags
export function getCommentTags(productId) {
    //get:http://localhost:9090/api/getCommentTags?itemId=xxx
    const url = 'http://localhost:9090/api/getCommentTags'
    return axios.get(url, {
        params: {
            itemId: productId
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

//detail-comment-comment
export function getCommentByTag(tag, itemId, page) {
    //get:http://localhost:9090/api/getCommentByTag?tag=全部&itemId=1241017&page=1
    const url = 'http://localhost:9090/api/getCommentByTag'
    return axios.get(url, {
        params: {
            tag, itemId, page
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

//search

//专题(识物页)
export function getTopicData() {
    const url = 'http://localhost:9090/api/getTopicData'
    return axios.get(url).then(res => {
        return Promise.resolve(res.data)
    })
}

