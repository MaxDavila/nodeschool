var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  if (req.method != 'GET') return res.end("Can't handle request different than GET sawry");
  var path = url.parse(req.url, true).pathname,
      query = url.parse(req.url, true).query,
      date = new Date(),
      json;

  switch(path) {
    case '/api/parsetime':
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.write(JSON.stringify( parseTime(date) ));
      break;
    case '/api/unixtime':
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.write(JSON.stringify( parseUnixTime(date) ));
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html' });
      res.write("The page that you are looking for does not exist");
      break;
  }
  res.end();



});

function parseTime(date) {
  return {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
  };
}

function parseUnixTime(date) {
  return {
        unixtime : date.getTime()
  };
}
server.listen(8000);