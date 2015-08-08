var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err, list) {
	var filteredList = list.filter(function(filename) {
		return path.extname(filename) === "." + process.argv[3];
	});

	for(var f = 0; f < filteredList.length; f++) {
		console.log(filteredList[f]);
	}
});