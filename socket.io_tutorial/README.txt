[express, socket.io]

Socket.io
=> socket.i 모듈을 토해서 웹서버는 웹브라우저와 실시간 통신을 한다.
=> http 서버를 구성할 때, socket.io가 서버에 들어오는 소켓 통신을 받을 수 있도록 설정해야 한다. [채팅]
=> 연결-통신-종료의 단계로 이루어진다.
=> 크기 non-persistent, persistent 방식이 있다.
Non-Persistent : socket 연결, 통신, 종료 반복
persistent : 통신 종료 x 계속 통신.

socket : 서버에 메모리 가지고 있다. 메모리 부담 => 트래픽 소모를 최소화 할 경우.
ajax : http 프로토콜 따라야함. 트래픽 부담 => 페이지 이동이 잦을 경우.

/* 참조 : https://dalkomit.tistory.com/96?category=542200 */
