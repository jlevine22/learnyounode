var http = require('http');

var url = process.argv[2];

var client = http.get(url, function(response) {
	response.on('data', function(data) {
		console.log(data.toString())
	});
});