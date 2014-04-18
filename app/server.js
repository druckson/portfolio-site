var express = require("express");
var stylish = require("stylish");
var connect_jade_html = require("connect-jade-html");
var app = express();

app.set('views', __dirname + "/views/");
app.set('view engine', "jade");
app.use(stylish(__dirname + "/public/"));
app.use(connect_jade_html({
    src: __dirname + "/views/",
    dest: __dirname + "/public/"
}));
app.use(express.static(__dirname + "/public/"));

app.get('/', function(req, res) {
    res.render('index', {});
});

//app.get('/partials/main.html', function(req, res) {
//    res.render('partials/main', {});
//});
//
//app.get('/partials/skills.html', function(req, res) {
//    res.render('partials/skills', {});
//});
//
//app.get('/partials/experience.html', function(req, res) {
//    res.render('partials/experience', {});
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
