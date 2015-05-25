var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var promises = [];

[url1, url2, url3].forEach(function(url) {
	promises.push(new Promise(function(resolve, reject) {
		http.get(url, function(response) {
			var allData = '';
			response.on('data', function(data) {
				allData += data.toString();
			});
			response.on('end', function() {
				resolve(allData);
			});
		});
	}));
});

Promise.all(promises).then(function(responses) {
	responses.forEach(function(r) {
		console.log(r);
	});
});