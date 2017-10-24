let express = require('express')
/*中间件*/
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser');
let session = require('express-session')
let apiRoutes = require('./apiRoutes')
let routes = require('./Route')
let app = express()
app.use(function (req, res, next) {
    // console.log(req.pathname)
    //如果客户端要向服务器发送cookie的话，绝不对写*
    res.header('Access-Control-Allow-Origin', "http://localhost:8090");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    //允许跨域传cookie
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'higo'
}));
app.use((req, res, next) => {
    console.log(req.session)
    if (!req.session.user) {
        let cartList = req.body.cartList ? req.body.cartList : [];
        req.session.user = {username: null, password: null, cartList}
    }
    next()
})
app.use(express.static('build'))
app.use('/api', apiRoutes);
app.use('/', routes)
app.listen(9090)

