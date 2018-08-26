const http = require('http')
const url = require('url')

let server = http.createServer((req, res)=>{

	let urlInfo = url.parse(req.url, true)
		let date = new Date(urlInfo.query.iso)
	if(urlInfo.pathname == '/api/parsetime'){
		let body = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
		res.end(JSON.stringify(body))
	} else if(urlInfo.pathname == '/api/unixtime') {
		let body = {unixtime: date.getTime()}	
		res.end(JSON.stringify(body))
	}
})

server.listen(process.argv[2])
