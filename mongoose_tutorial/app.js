
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// [configure app to use bodyParser]
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// [configure server port]
var port = process.env.port || 8080;

// [configure router]
var router = require('./routes/index')(app);

// [configure mongoose]

// connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	// connceted to mongodb server
	console.log("connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// [RUN SERVER]
var server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)    
});

