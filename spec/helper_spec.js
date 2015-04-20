var frisby = require('frisby');

var SERVER_URL = "http://localhost:8080";

describe('Helper Suite', function() {
	frisby.create('After Helper Function')
		  .get(SERVER_URL + '/itemList')
		  .after(function(err, res, body) {
		      var jsonObj = JSON.parse(body);
		      var itemId = 'Default Item ID';

		      if (jsonObj) {
		          itemId = jsonObj.itemId;
		      }

		      frisby.create('After Getting First Response')
		      	    .get(SERVER_URL + '/itemList/' + itemId)
		      	    .expectJSON({
		      	    	ID : itemId 
		      	    })
		      	    .toss();
		  })
		  .toss();

	frisby.create('AfterJSON Helper Function')
		  .get(SERVER_URL + '/itemList')
		  .afterJSON(function(jsonObj) {
		      var itemId = 'Default Item ID';

		      if (jsonObj) {
		          itemId = jsonObj.itemId;
		      }

		      frisby.create('After Getting First Response')
		      	    .get(SERVER_URL + '/itemList/' + itemId)
		      	    .expectJSON({
		      	    	ID : itemId 
		      	    })
		      	    .toss();
		  })
		  .toss();
});