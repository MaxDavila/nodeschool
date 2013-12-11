var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  if (req.method != 'GET') return res.end("Can't handle request different than GET sawry");
  var path = url.parse(req.url, true).pathname;
  var query = url.parse(req.url, true).query;
  var date = new Date();

  switch(path) {
    case '/api/parsetime':
      res.writeHead(200, {'Content-Type': 'application/json' });
      var json = {
        "hour" : date.getHours(),
        "minute" : date.getMinutes(),
        "second" : date.getSeconds()
      };
      res.write(JSON.stringify(json));
      break;
    case '/api/unixtime':
      res.writeHead(200, {'Content-Type': 'application/json' });
      var json = {
        "unixtime" : date.getTime()
      };
      res.write(JSON.stringify(json));
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html' });
      res.write("The page that you are looking for does not exist");
      break;
  }
      res.end();

});

server.listen(8000);