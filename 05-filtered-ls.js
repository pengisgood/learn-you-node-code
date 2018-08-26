const fs = require('fs');

fs.readdir(process.argv[2], (error, list) => {
	if(error) {
		return error;
	}
	for(let name of list) {
		if(name.endsWith(`.${process.argv[3]}`)) {
			console.log(name);
		}
	}
})
