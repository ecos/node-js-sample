var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {


var indexPath=('./index.html');
var fs=require('fs');


response.send(fs.readFileSync('./index.html','utf-8')
);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
