var request = require('request');
//loaded index.js file within request and all dependancies fo it.

//var request = require('request').get;
//This will only load the get function or anything dependent on this.

var callback = function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage. 
};
request('http://www.google.com', callback);
console.log("made a request");