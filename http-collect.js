var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
	var collection = '';
	response.on('data', function(data) {
		collection += data.toString();
	});

	response.on('end', function() {
		console.log(collection.length);
		console.log(collection);
	});
});