var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(4444, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Rbbit API app listening at http://localhost:%s', port);

});
