const http = require('http');
const formidable = require('formidable'); //module helps to organose upload or moving a file
const fs = require('fs');

http
	.createServer(function (req, res) {
		if (req.url == '/fileupload') {
			const form = new formidable.IncomingForm();
			form.parse(req, function (err, fields, files) {
				const oldpath = files.filetoupload.filepath;
				//here the path needs to as per the local drive path
				const newpath =
					'/home/ismi-abbas/MaybankInduction' + files.filetoupload.originalFilename;
				fs.rename(oldpath, newpath, function (err) {
					if (err) throw err;
					res.write('File uploaded and moved!');
          // Show path of the uploaded file
          res.end('File path: ' + newpath);
				});
			});
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(
				'<form action="fileupload" method="post" enctype="multipart/form-data">'
			);
			res.write('<input type="file" name="filetoupload"><br>');
			res.write('<input type="submit">');
			res.write('</form>');
			return res.end();
		}
	})
	.listen(8080);
