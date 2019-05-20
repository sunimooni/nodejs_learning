/*
	node.js에선 event를 매우 많이 사용
	node.js 서버 가동시 
		=> 변수 initialize 
		=> 함수 선언 
		=> 이벤트 일어날때까지 대기
	Event-Driven(이벤트 위주) 어플리케이션
		=> 이벤트 대기하는 메인 루프가 있다.
		=> 이벤트 감지 되었을 때, Callback 함수 호출.
		event Emiiter - [event (event loop)] - event Handler
	
		event Handling = 옵저버 패턴에 의해 작동.
			EventListeners 함수들이 옵저버 역할을 한다.
			옵저버들이 이벤트 기다리다, 실행되면 처리하는 함수 실행.
		Callback function = 비동기식 함수에서 결과 반환시 호출.

	node.js
	=> events 모듈과 EventEmitter 클래스가 내장되어 있다.
	=> 이를 이용하여 event와 eventHandler 연동(bind) 시킬 수 있다.
*/
var events = require('events');
// 이벤트와 핸들러 바인드 시켜주는 객체 생성
var eventEmitter = new events.EventEmitter();

// eventHandler 함수 생성
var connectHandler = function connected(){
	console.log("connection!");
	// data_receivced 이벤트 발생시키기
	eventEmitter.emit("data_received");
}

// connectHandler 와 connection 연동
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function(){
	console.log("Data Received");
});

eventEmitter.emit('connection');

console.log('end');

