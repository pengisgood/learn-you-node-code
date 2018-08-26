const net = require('net')
const strftime = require('strftime')

let server = net.createServer((socket)=>{
	socket.end(strftime("%Y-%m-%d %H:%M\n", new Date()))
})

server.listen(process.argv[2])
