var express = require('express');
var app = express();
var fs = require('fs');
 

 app.get('/getuser' , function(req, res){
 	fs.readFiles(__dirname + "/" + "user.json", 'utf8', function(err, data){
 		console.log(data);
 		res.end(data);
 	});
 });

 var server = app.listen(3000, function(){
 	var host = server.address().address
 	var port = server.address().port
 	console.log("Rest API demo app at http://%s%s", host, port)
 });