var express = require('express');
var app = express();

app.listen(8080, function(){
console.log('My first Node Server started at port 8080');
});

app.set('view engine','jade');
var process = function(request, response){

response.render('home');

};

app.get('/', process);

