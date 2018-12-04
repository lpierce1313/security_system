//Required Modules
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 8000;

//App pages for web
app.get('/', function(req, res) {
  res.render('./index');
});

//Load server on localhost 3000
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
