var fs = require('fs');

module.exports = function(directory, extension, callback) {
	fs.readdir(directory, function(err, files) {
		if (err) {
			return callback(err);
		}
		callback(null, files.filter(function(file) {
			return file.substr(-(extension.length+1)) == '.' + extension;
		}));
	});
};