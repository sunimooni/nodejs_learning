CRUD
Create, Retrieve, Update, Delete [생성, 조회, 갱신, 삭제]

ROUTE				METHOD		DESCRIPTION			model = mongoose.model
/api/books			GET		모든 book 데이터 조회		model.find() [조회]
/api/books/:book_id		GET		_id 값으로 데이터 조회		model.findOne() [조회], model.findById()
/api/books/author/:author	GET		author 값으로 데이터 조회	model.find()
/api/books			POST		book 데이터 생성		model.save() [생성]
/api/books/:book_id		PUT		book 데이터 수정		model.update()
/api/books/:book_id		DELETE		book 데이터 제거		model.remove()
