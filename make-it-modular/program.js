const readdir = require('./module.js');

const dir = process.argv[2];
const ext = process.argv[3];

readdir(dir, ext, (err, data) => {
	if(err) return console.log(err);
	data.forEach((file)=> {
		console.log(file);
	});	
});
