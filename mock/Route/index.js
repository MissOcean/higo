let express = require('express')
let router = express.Router()
let users = [{username: 'higo', password: 'higo'}]
router.post('/login', (req, res) => {
    let user = req.body;
    console.log(user)
    let oldUser = users.find(item => item.username == user.username && item.password == user.password);
    if (oldUser) {
        req.session.user = user;
        res.json({code:0,success:'登陆成功',user})
    }else {
        res.json({code:1,error:'账号不存在或密码错误'});
    }
})
router.post('/register', function (req, res) {
    let user = req.body;
    console.log(user)
    let oldUser = users.find(item => item.username == user.username);
    if (oldUser) {
        res.json({code: 1, error: '用户名重复'});
    } else {
        users.push(user);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, success: '用户注册成功',user});
    }
});
module.exports = router;