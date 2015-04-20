var frisby = require('frisby');

var SERVER_URL = "http://localhost:8080";

describe('Expectation Suite', function() {

	// Test if Http status code is 200
	frisby.create('Expect Status')
		  .get(SERVER_URL)
		  .expectStatus(200)
		  .toss();

    // Test Certain Header
    frisby.create('Expect Header')
    	  .get(SERVER_URL)
    	  .expectHeader('Content-Type', 'application/json; charset=utf-8')
    	  .toss();

    // Test if Certain Header contains some string
    frisby.create('Expect Header Contain')
    	  .get(SERVER_URL)
    	  .expectHeaderContains('Content-Type', 'json')
    	  .toss();

    // Test if the response JSON body matches {"method" : "GET"}
    frisby.create('Expect JSON')
    	  .get(SERVER_URL)
    	  .expectJSON({
    	      method : 'GET'
    	  })
    	  .toss();

    // Test if field 'method' in the JSON body is type 'String'
    frisby.create('Expect JSON Types')
    	  .get(SERVER_URL)
    	  .expectJSONTypes({
    	      method : String
    	  })
    	  .toss();

    // use path parameter for expectJSON
    frisby.create('Expect JSON with [path]')
    	  .get(SERVER_URL + '/expectJson/path')
    	  .expectJSON('arg', {
    	      key1 : "value1"
    	  })
    	  .toss();

    // use path parameter for expectJSONTypes
    frisby.create('Expect JSON Types with [path]')
    	  .get(SERVER_URL + '/expectJson/path')
    	  .expectJSONTypes('arg', {
    	      key1 : String
    	  })
    	  .toss();

    // use path parameter to test all objects in an array
    frisby.create('Expect JSON Types with [path]')
    	  .get(SERVER_URL + '/expectJson/array/all')
    	  .expectJSON('myArray.*', {
    	      key : "value"
    	  })
    	  .expectJSONTypes('myArray.*', {
    	      key : String
    	  })
    	  .toss();

    // use path parameter to test one object in an array
    frisby.create('Expect JSON Types with [path]')
    	  .get(SERVER_URL + '/expectJson/array/one')
    	  .expectJSON('myArray.?', {
    	      key1 : "value1"
    	  })
    	  .expectJSONTypes('myArray.?', {
    	      key2 : String
    	  })
    	  .toss();

    // Test if the response body contains "GET"
    frisby.create('Expect Body Contains')
    	  .get(SERVER_URL)
    	  .expectBodyContains("GET")
    	  .toss();

    // Test if field 'method' in the JSON body has length 3 (GET)
    frisby.create('Expect JSON length')
    	  .get(SERVER_URL)
    	  .expectJSONLength('method', 3)
    	  .toss();

});