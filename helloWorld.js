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

var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

app.get('/fav_animals', function (request, response) {
    var favAnimals = animals.filter(function(animals) {
      return animals.favorite == true
    });
    console.log(favAnimals);
    var context = {favAnimals: favAnimals};
    response.render('uList.html',context);
});


app.listen(8000, function () {
    console.log('Listening on port 8000');
})