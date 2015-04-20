var frisby = require('frisby');

var SERVER_URL = "http://localhost:8080";

describe('Inspector Suite', function() {

	// print body in console
	frisby.create('Inspect Body')
		  .get(SERVER_URL)
		  .inspectBody()
		  .toss();

	// print JSON body in console
	frisby.create('Inspect JSON')
		  .get(SERVER_URL)
		  .inspectJSON()
		  .toss();
});