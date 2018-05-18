var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.get('/', function(request, response) {
    response.send('Hello World');
});

app.get('/cats', function (request, response) {
  response.send('Meow');
});

app.get('/dogs', function (request, response) {
  response.send('Woof');
});

app.get('/DogsAndCats', function (request, response) {
  response.send('Living Together');
});

app.get('/greet/:slug', function (request, response) {
    var slug = request.params.slug;
    var age = 2018 - request.query.age || 1000;
    var context = {slug: slug, age: age};
    response.render('index.html', context);
});

app.get('/year', function (request, response) {
    var age = request.query.age || 1000;
    response.send('You were born in ' + (2018 - age));
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
})