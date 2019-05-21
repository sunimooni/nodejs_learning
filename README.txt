REPL 터미널
R : Read  - 유저의 값을 입력받아 javascript 데이터 구조로 메모리에 저장
E : Eval  - 데이터를 처리
P : Print - 결과값을 출력
L : Loop  - Read,Eval,Print를 유저가 ctrl+c를 두번 눌러 종료할때까지 반복한다.

REPL 커맨드
1. Ctrl+C – 현재 명령어를 종료합니다.
2. Ctrl+C (2번)  – Node REPL 을 종료합니다.
3. Ctrl+D – Node REPL을 종료합니다.
4. 위/아래 키 – 명령어 히스토리를 탐색하고 이전 명령어를 수정합니다.
5. Tab – 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인합니다.
6. .help – 모든 커맨드 목록을 확인합니다.
7. .break – 멀티 라인 표현식 입력 도중 입력을 종료합니다.
8. .clear – .break 와 같습니다.
9. .save filename – 현재 Node REPL 세션을 파일로 저장합니다.
0. .load filename – Node REPL 세션을 파일에서 불러옵니다.

Node Package Manager
1. npm install <모듈 이름>
2. var ex = require('<모듈 이름>');
3. 로컬 vs 글로벌
	- 로컬 : 패키지 명령어를 실행한 디렉터리 안에 있는 node_modules에 설치하는 것.
	- 글로벌 : '-g 옵션' 시스템 디렉토리에 설치하는 것. [/usr/lib/node_modules에 설치]
		- 글로벌 모드 설치시 node 어플리케이션에서 바로 require 불가.
		- npm link <모듈 이름> 으로 link 해주어야 한다.
4. npm uninstall < >
5. npm update < >
6. npm search < >

package.json
1. 노드 어플리케이션/모듈의 경로에 위치해 있다.
2. 패키지의 속성을 정의한다.

Callback Function
1. 자바스크립트에서 function은 일급 객체이다. Object like String, Array, Number, ...
2. Callback function : 특정 함수에 매개변수로서 전달된 함수.

[express,ejs,body-parser,express-session]

EJS 탬플릿 엔진
- 탬플릿을 읽어 엔진의 문법과 설정에 따라서 파일을 HTML 형식으로 변환시키는 모듈.
- EJS는 HTML에서 <% %>을 사용하여 서버의 데이터를 사용하거나 코드 실행.
- <% 자바스크립트 코드 %>
- <% 출력 할 자바스크립트 객체 %> // rounter에서 객체 받아올 수 있다.

RESTful API
- Representational State Transfer
- REST 서버는 클라이언트로 하여금 HTTP 프로토콜을 사용하여, 서버 정보 접근 및 변경
- JSON, TEXT, XML
- HTML METHOD
	GET 조회
	PUT 생성 및 업데이트
	DELETE 제거
	POST 생성

Express-Session
- 세션을 관리하기 위해 필요한 미들웨어
 
/* 참조 : https://velopert.com/node-js-tutorials */
