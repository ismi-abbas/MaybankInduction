const http = require('http');
const dt = require('./dateTime');
const url = require('url');

http
	.createServer((req, res) => {
		console.log(req.url);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h4>The date is:</h4>' + dt.myDateTime());
	})
	.listen(8080);

const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

const qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
