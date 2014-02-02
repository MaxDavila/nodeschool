var express = require('express');
var app = express();

app.set('view engine', 'jade')
app.get('/home', function(req, res){

});
app.listen(process.argv[2]);