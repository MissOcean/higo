let express = require('express')
/*中间件*/
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser');
let session = require('express-session')
let apiRoutes = require('./apiRoutes')
let app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'higo'
}));
app.use('/api', apiRoutes)
app.listen(9090);