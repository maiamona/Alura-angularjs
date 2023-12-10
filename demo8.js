var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(adr, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);