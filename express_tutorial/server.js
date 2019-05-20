var express = require('express');
var app = express();

/* 라우터 모듈인 main.js를 불러와 app에 전달해준다. */
var router = require('./router/main')(app);

/* 서버가 읽을수 있도록 html 위치 정의 */
app.set('views', __dirname + '/views');

/* view engine : ejs */
app.set('view engine', 'ejs');

/* html 렌더링 할때, ejs엔진 사용 */
app.set('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
});

app.use(express.static('public'));
