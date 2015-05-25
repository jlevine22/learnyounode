var directory = process.argv[2];
var extension = process.argv[3];

require('./make-it-modular-module')(directory, extension, function(err, result) {
	result.forEach(function(v) {
		console.log(v);
	});
});