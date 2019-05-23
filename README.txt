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

[express,mongoose,body-parser]
Mongoose
- MongoDB 기반의 ODM(Object Data Mapping)-Node.js 전용 라이브러리 이다.
- ODM은 DB와 객체지향 언어 사이 호환되지 않는 데이터 변환 프로그래밍 기법이다.
- APP -> JAVASCRIPT OBJECT 매핑

MongoDB
- C++로 작성된오픈소스.
- 문서지향적(Document-Oriented)적 Cross-platform DB.
- 확장성, 성능 높음. Not Only SQL => 고정된 스키마 및 JOIN이 존재하지 않는다.
	1. Document [Record]
	- (_id) : Primary key
	- 데이터의 구조는 한개 이상의 KEY-VALUE pair[document]로 이루어져 있다.
	- 동적인 schema를 가지고 있다. 같은 collection안에 있는 다른 document끼리 다른 scheme 가질 수 있다. [다른 key 가질 수 있다.]
	2. Collection [Table]
	- Document들이 Collection 내부에 위치하고 있다.
	- RDMS의 table과 비슷한 개념 but schema를 따로 가지고 있지는 않다.
	3. Database
	- Collection들의 물리적인 컨테이너.
	4. Data Modeling
	- 사용자의 요구에 따라 schema 디자인한다.
	- 객체들을 함께 사용하게 된다면, 하나의 Document에 합친다(ex: 게시물-덧글)
	- 하나의 Document에 합치지 않을 것이면, 아애 따로 사용한다.(join 연산x)
	- 읽을 때 join x, 데이터 작성할 때 join o
	5. How to use
	- create Database : use < >
	- show Databases : db, show dbs
	- insert document : db.book.insert("{~~}") // book collection 안에 document 추가
	- drop Database : use <삭제할 db> -> db.dropDatabase();
	- create collection : db.createCollection(name,[options])
		option: capped [size를 꼭 설정해야 한다], autoIndex [_id 필드에 index 자동]
			size [maximum size ~bytes], max [최대 개수]
	- show collections
 	- drop colleciton : db.<collections>.drop()
	- remove document : db.<collections>.remove(criteria, justOne)
		- criteria (document) => 삭제할 데이터의 기준값, {}이면 모든 데이터 삭제 
		- justOne  (boolean) => true면 1개의 다큐먼트제거, false 면 모두
	- db.<>.find(query, projection)
		=> pretty() 이쁘게 출력
		=> sort()
		=> limit()
		=> skip()
		return 값은 cursor이다. cursor는 query 요청의 결과값을 가르키는 pointer이다.
		1. query
		- 비교 연산자
			$eq equals
			$gt greater than
			$gte greater than or equals
			$lt less than
			$lte less than or equals
			$ne not equal
			$in [] 주어진 배열안에 속하는 값
			$nin [] 주어진 배열안에 속하지 않는 값
		- 논리 연산자
			$or, $and 
			$not 주어진 조건이 false 일때, true
			$nor 주어진 모든 조건이 false일때 true
		- regax 연산자 [정규식]
			{ <field> : { $regex : 'pattern', $options : '<options>' } }
			{ <field>: /pattern/<options> }
				options => i 대소문자무시, m 정규식에서 ^ 사용시 \n 있다면 무력화
					   x 정규식 안에 있는 whitespace 모두 무시, s . 사용시 \n 포함 매치
		- $where 연산자
			ex) db.articles.find({$where: "this.comments.length == 0"})
		- $elemMatch 연산자
			Embedded Documents 배열을 쿼리할 때 사용한다. sub { }
			embedded에서 해당 사항 있는 것 추출
		2. projection
		- 쿼리의 결과값에서 보여질 field를 정의한다.
		- ex) db.articles.find({},{"_id":false,"title":true ...})
		- slice 연산자
			$slice : Embedded Document 배열을 읽을때 limit 설정
			ex)db.articles.find({"title": "article03"}, {comments: {$slice: 1}}).pretty()
		- $elemMath
			embedded에서 해당 사항만 추출	
		3. find() 메소드 활용
		=> find() 메소드 사용시 cursor 형태의 결과 값 반혼. 
		- cursor.sort({key : value, key :value}) // value의 값은 1(오름차순) or -1(내림차순)
		- cursor.limit(value) // value는 출력할 갯수 값.
		- cursor.skip(value) // 처음에 몇개 거르고 시작할 건지.
		4. UPDATE
		$set 변경, $push 추가, $pull 제거
		- db.collection.update(<query>,<update>,{}) // 특정 field 수정 + 존재하는 document 대체
			query 		(document)	업데이트 할 document의 criteria를 정한다.
			update		(document)	document에 적용할 변동사항이다.
			upsert		(boolean)	[optional] true이면 query한 document 없을시 새로 추가
			multi 		(boolean)	[optional] true이면 여러개의 document를 수정
			writeConcern	(document)	[optional] 업데이트에 필요한 설정값 // writeConcern을 사용하려면 파라미터 생략.
	6. DB dump
	- mongodump --host 127.0.0.1 --port 27017
	
	

RDBMS	 vs	MongoDB
Database	Database
Table		Collection
Tuple / Row	Document
Column		Key / Field
Table Join	Embedded Documents
Primary Key	Primary Key (_id)

Database Server & Client
mysqld		mongod
mysql		mongo





/* 참조 : https://velopert.com/node-js-tutorials */
