var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);

app.use(bodyParser.json());

app.get('/', function(req, res) {
	var jsonObj = {
		method : 'GET'
	};
	res.json(jsonObj);
});

app.get('/expectJson/path', function(req, res) {
	var jsonObj = {
    	arg : {
        	key1 : "value1"
     	},
     	other_key1 : "other_value1",
     	other_key2 : "other_value2",
     	other_key3 : "other_value3",
     	other_key4 : "other_value4",
 	};
 	res.json(jsonObj);
});

app.get('/expectJson/array/all', function(req, res) {
	var jsonObj = {
		myArray : [
		{
			key : "value"
		}, 
		{
			key : "value"
		},
		{
			key : "value"
		}]
	};
 	res.json(jsonObj);
});

app.get('/expectJson/array/one', function(req, res) {
	var jsonObj = {
		myArray : [
		{
			key1 : "value1"
		}, 
		{
			key2 : "value2"
		},
		{
			key3 : "value3"
		}]
	};
 	res.json(jsonObj);
});

app.get('/itemList', function(req, res) {
	var jsonObj = {
		itemId : '1234'
	};
	res.json(jsonObj);
});

app.get('/itemList/:itemId', function(req, res) {
	var jsonObj = {
		ID : req.params.itemId
	};
	res.json(jsonObj);
});

// Test Send JSON
app.post('/sendJSON', function(req, res) {
	var jsonObj = req.body;

	if (jsonObj) {
		res.json({itemId : jsonObj.itemId});
	}
	else {
		res.json({itemId : 'null'});
	}
	
});


server.listen(8080, '127.0.0.1', function() {
	console.log('Http Server Listening on Port: 8080 ... ');
});