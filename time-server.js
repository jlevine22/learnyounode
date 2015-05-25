var net = require('net');
var moment = require('moment');

var port = process.argv[2];

var server = net.createServer(function(socket) {
	
	socket.write(moment().format('YYYY-MM-DD HH:mm'));
	socket.write("\n");
	process.exit();
});

server.listen(port);