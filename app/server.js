var express = require("express");
var stylish = require("stylish");
var app = express();

app.set('views', __dirname + "/views/");
app.set('view engine', "jade");
app.use(stylish(__dirname + "/public/"));
app.use(express.static(__dirname + "/public/"));

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('/main.html', function(req, res) {
    res.render('partials/main', {});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
