var express = require('express');
var app = express();

app.set('views', './src/views');   ////views is the template use
app.set('view engine', 'jade');    ///// templating language is specified to jade

app.get('/', function (req, res) {
	res.render('index');
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});