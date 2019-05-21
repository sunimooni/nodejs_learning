module.exports = function(app, fs)
{
	app.get('/', function(req,res){
		var sess;
		/* 세션 초기 설정 */
		sess = req.session;
		console.log(sess.username);
		/* json 데이터를 render 메소드 두번째 인자로 전달함으로서,
		   페이지에서 데이터를 사용 가능하게 한다.*/
		res.render('index', {
			title : "My Homepage",
			length : 5,
			name : sess.name,
			username : sess.username
		});
	});

	app.get('/login/:username/:password', function(req,res){
		sess = req.session;
		fs.readFile(__dirname + "/../data/user.json",'utf8',function(err,data){
			var users = JSON.parse(data);
			var username = req.params.username;
			var password = req.params.password;
			var result = {};
			// not found
			if(!users[username]){
				result["success"] = 0;
				result["error"] = "not found";
				res.json(result);
				return;
			}
			// password incorrect
			if(users[username]["password"] == password){
				result["success"] = 1;
				// 성공시 session에 username과 name 저장
				sess.username = username;
				sess.name = users[username]["name"];
				res.redirect('/');
			}else{
				result["success"] = 0;
				result["error"] = "password incorrect";
				res.json(result);
			}
		});
	});

	app.get('/logout',function(req,res){
	 	sess = req.session;
		if(sess.username){
			req.session.destory(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/');
				}
			})	
		}else{
			res.redirect('/');
		}
	});

	app.get('/list',function(req,res){
		fs.readFile(__dirname + "/../data/user.json",'utf8',function(err,data){
			res.end(data);
		});
	});
	/*
		JSON.parse() : readFile()은 텍스트 형태이므로 Json 형식으로 읽는다.
	*/	
	app.get('/getUser/:username', function(req,res){
		fs.readFile(__dirname + "/../data/user.json",'utf8',function(err,data){
			var users = JSON.parse(data);
			res.json(users[req.params.username]);
		});
	});
	/*
		post 추가, stringify => json 객체를 string 으로
	*/
	app.post('/addUser/:username',function(req,res){
		var result = { };
		var username = req.params.username;
		
		// check req validity		
		if(!req.body["password"]|| !req.body["name"]){
			result["success"] = 0;
			result["error"] = "invalid request";
			res.json(result);
			return;
		}
		
		// load data & check duplication
		fs.readFile(__dirname + "/../data/user.json",'utf8', function(err,data){
			var users = JSON.parse(data);
			// check duplication
			if(users[username]){
				result["success"] = 0;
				result["error"] = "duplicate";
				res.json(result);
				return;
			}
			// add to data
			users[username] = req.body;

			// save data
			fs.writeFile(__dirname + "/../data/user.json", JSON.stringify(users,null,'\t'), 'utf8',function(err,data){
				result["success"] = 1;
				res.json(result);
			});
		});
	});
	/*
		put
	*/
	app.put('/updateUser/:username', function(req,res){
                var result = { };
                var username = req.params.username;
                
                // check req validity           
                if(!req.body["password"]|| !req.body["name"]){
                        result["success"] = 0;
                        result["error"] = "invalid request";
                        res.json(result);
                        return;
                }
		fs.readFile(__dirname + "/../data/user.json",'utf8', function(err,data){
                        var users = JSON.parse(data);
                        // add or modify data
                        users[username] = req.body;

                        // save data
                        fs.writeFile(__dirname + "/../data/user.json", JSON.stringify(users,null,'\t'), 'utf8',function(err,data){
                                result["success"] = 1;
                                res.json(result);
                        });
                });
	});
	/*
		delete
	*/
	app.delete('/deleteUser/:username', function(req, res){
        	var result = { };
	        //LOAD DATA
	        fs.readFile(__dirname + "/../data/user.json", "utf8", function(err, data){
   	        	var users = JSON.parse(data);
		
			// IF NOT FOUND
            		if(!users[req.params.username]){
                		result["success"] = 0;
  	           		result["error"] = "not found";
       		        	res.json(result);
                		return;
			}

            		// DELETE FROM DATA
           		delete users[req.params.username];

            		// SAVE FILE
            		fs.writeFile(__dirname + "/../data/user.json", JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                		result["success"] = 1;
                		res.json(result);
                		return;
            		});
        	});
    });	
}
