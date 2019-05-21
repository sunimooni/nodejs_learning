var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs")


var app = express();
/* 서버가 읽을수 있도록 html 위치 정의 */
app.set('views', __dirname + '/views');
/* view engine : ejs */
app.set('view engine', 'ejs');
/* html 렌더링 할때, ejs엔진 사용 */
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
});

/*
 session
 1. secret : 쿠키를 임의로 변조하는 것을 막기위한 임의의 sign 값.
 2. resave : 세션을 언제나 저장할 지 정하는 값 (false 권장)
 3. saveUninitialized : uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션.(true 권장)
*/
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
	secret : '1234',
	resave : false,
	saveUninitialized : true
}));


/* 라우터 모듈인 main.js를 불러와 => app과 fs 모듈 전달해준다 */
var router = require('./router/main')(app,fs);

