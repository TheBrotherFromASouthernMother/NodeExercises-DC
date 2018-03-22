const express = require('express');

const app = express();


app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get("/cat", (req, res) => {
  res.send("Meow")
})

app.get("/dog", (req, res) => {
  res.send("woof")
})

app.get("/cats_and_dogs", (req, res) => {
  res.send("living together")
})

app.get("/hello/:name", (req, res) => {
  var name = req.params.name || "world";
  res.send("hello" + name)
})


app.get('/hello1', function(req, res){

var date = req.query.year || 'world';

res.send('You were borin in ' + date + '!');

});




app.listen(8000, function () {
  console.log('Listening on port 8000');
});
