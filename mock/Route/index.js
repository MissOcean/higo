let express = require('express')
let router = express.Router()
let fs = require('fs')

function readUers() {
    return JSON.parse(fs.readFileSync('./userList.json', 'utf-8'))
}

function writeUers(users) {
    fs.writeFileSync('./userList.json', JSON.stringify(users))
}

router.get('/logout', (req, res) => {
    let user = req.session.user = {username: null, password: null, cartList: []}
    res.json({code: 0, success: '已退出登录', user})
})
router.post('/login', (req, res) => {
    let users = readUers(),
        user = req.body;
    let oldUser = users.find(item => item.username == user.username && item.password == user.password);
    if (oldUser) {
        let logined = Boolean(req.session.user.username)
        console.log(logined, req.session.user.cartList)
        if (!logined) oldUser.cartList = oldUser.cartList.concat(req.session.user.cartList)
        req.session.user = oldUser;
        //console.log(users, oldUser)
        writeUers(users)
        res.json({code: 0, success: '登陆成功', user: oldUser})
    } else {
        res.json({code: 1, error: '账号不存在或密码错误', user: req.session.user});
    }
})
router.post('/register', function (req, res) {
    let users = readUers(),
        user = req.body;
    console.log(user)
    let oldUser = users.find(item => item.username == user.username);
    if (oldUser) {
        res.json({code: 1, error: '用户名重复'});
    } else {
        user.cartList = []
        users.push(user);
        writeUers(users)
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, success: '用户注册成功', user});
    }
});
router.get('/loginState', function (req, res) {
    res.json({user: req.session.user})
});
router.post('/modifyCartList', function (req, res) {
    let users = readUers(),
        user = req.body;
    //console.log(user)
    let oldUser = users.find(item => item.username == user.username);
    if (oldUser) {
        oldUser.cartList = user.cartList
        req.session.user = user;
        console.log('xxxxxxxxxxxxxxxxxx', user.cartList)
        writeUers(users)
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, success: '修改成功', user});
    } else {
        req.session.user = user
        res.json({code: 1, error: '用户不存在',user});

    }
});

module.exports = router;