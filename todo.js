/* web server */
var express = require('express');
var app 	= express();
var port	= 8080;

var fs 		= require('fs');

/* request logger */
var morgan  = require('morgan');

//all todo's in array
var todos = {};
fs.readFile('data.json', 'utf8', function (err,data) {
  	if (err) {
    	return console.log(err);
  	}
  	todos = JSON.parse(data);
});


function getTodos(res) {
	todos['3'] = {
		'id'		: '1',
		'label'		: 'dit is een todo',
		'completed'	: false
	};
	res.json(todos);
}


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));


app.get('/api/todos', function(req, res) {

	// use a generic funciton to get all the todo's
	getTodos(res);
});


//catch all other requests
app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
})


/* off we go, start the webserver */
app.listen(port);
console.log("App listening on port " + port);