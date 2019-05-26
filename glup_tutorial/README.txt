gulp.js
=> 파일을 수정할 때, 자동으로 서버에 업뎃 해결.
=> javascript 빌드 자동화 툴 + es6 문법 사용[es6 문법으로 gulp.js 사용하기]

sudo npm install -g gulp

sudo npm install -g graceful-fs lodash

npm init

[gulp-util gulp에서 로그를 쉽게 기록 할 수 있게 해준다.]
npm install -save-dev gulp gulp-util

[babel-core와 babel-preset-es2015 devDependencies로 모듈 설치 => es6 사용시 필요한 모듈]
npm install --save-dev babel-core babel-preset-es2015

[.babelrc 파일 생성 : 스크립트를 변환해주는 모듈 es6 문법 사용하겠다.]
{
	"presets":["es2015"]
}

gulpfile.babel.js 작성

/*
	src 폴더에는 front-end 사용시 필요한 파일 있음. gulp에서 minify하여 dist 폴더에 변환된 파일들을 저장한다.
	server 폴더에는 server-side 에서 사용될 파일 있다. 
*/

GULP 사용
=> gulp에는 4가지의 주요 API가 있다.
=> gulp.task, gulp.src, gulp.dest, gulp.watch

1. gulp.task(name [, deps, fn])
	task 즉, '작업'을 정의한다. + name은 string 형태로 task의 이름을 지정. + deps와 fn은 optional 인수로서, 생략되어도 되는 인수이다.
	deps는 task name 의 배열 형태이며 이 인수가 전달 될 시, 이 배열 안에 있는 task들을 먼저 실행 한 다음에, 함수 형태로 fn 을 실행한다.
	name 명시 안하면 default task 실행
