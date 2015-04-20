var frisby = require('frisby');

var SERVER_URL = "http://localhost:8080";

describe('Send JSON Suite', function() {

	// post a JSON body
	frisby.create('Post JSON')
		  .post(SERVER_URL + '/sendJSON',
		  {
		  	  itemId : '1234',
		  	  dummyField : 'asdklfj'
		  },
		  { json : true})
		  .expectJSON({
		      itemId : '1234'
		  })
		  .toss();
});