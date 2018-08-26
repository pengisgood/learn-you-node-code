const http = require('http')
const bl  = require('bl')

const urls = process.argv.slice(2)
let data = []
let count = 0;
urls.forEach((url, index)=>{
	http.get(url, (res)=>{
		res.pipe(bl((err, d) =>{

		data[index] = d.toString();
		count+=1;

		if(count==3) {
		
		data.forEach((d)=>{console.log(d)})
		}

		}))
	})
})
