/*
	프로그램이 함수가 끝날때까지 기다리지 x => 바로 그아래 코드들 실행한다.
	그 다음에 함수에 있던 작업이 다 끝나면 콜백함수 호출.

	모든 Node 어플리케이션의 비동기식 함수에서는 매개변수를
		1. 첫번째 error
		2. 마지막 callback 함수
*/

var fs = require("fs");

fs.readFile('README.txt', function(err, data){
	if(err) 
		return console.log(err);
	console.log(data.toString());
});

console.log("end");
