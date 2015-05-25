var fs = require('fs');

var directory = process.argv[2];
var filterExtension = process.argv[3];

fs.readdir(directory, function(err, files) {
	files.filter(function(file) {
		return file.substr(-(filterExtension.length + 1)) == ('.' + filterExtension);
	}).forEach(function(file) {
		console.log(file);
	});
});