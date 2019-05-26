module.export = function(server){
	var io = require('socket.io')(server);
	io.on('connection', function(socket){
		socket.on('message',function(msg){
			console.log(msg);
			socket.emit('my message',msg);
			socket.broadcast.emit('other message', msg); // io.broadcast.emit 자신 제외 모든 사람 vs io.emit 하면 자신을 포함한 모든사람
		});
	});
	return io;
}
