var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	var book = mongoose.model('book',bookSchema)
	new Schema({schema},{collection :'collection_name'})
*/
var bookSchema = new Schema({
	title : String,
	author : String,
	published_date : { type : Date, default : Date.now }
});


module.exports = mongoose.model('book',bookSchema);
