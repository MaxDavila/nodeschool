var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
  if (req.method != 'POST') return res.end('You nned to send a POST\n');

  req.pipe(map(function (chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(8000);

