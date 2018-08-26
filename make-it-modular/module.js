const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
	fs.readdir(dir, (err, data) => {
		if(err) return callback(err);
		let res = data.filter((file) => {
			return path.extname(file) === ('.'+ext);
		});
		callback(null, res);
	})
}
