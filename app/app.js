
var express = require('express');

var dataFile = require('./data.json');

// var reload = require('reload')
var app = express();



app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(require("./routes/index.js"));
app.use(require("./routes/speakers.js"));
app.use(require("./routes/greet.js"))
app.use(require("./routes/history.js"))


app.get("/ajaxTest", (req, res) => {
  res.render('ajaxTest');
})

app.get("/AJAXCALL", (req, res) => {
  res.send("<h2> I am nothing but a man </h2>")
})

app.use(express.static("app/public"))


var server = app.listen(3000, function(){
    console.log('Example app listening on port ');
});

//
// reload(server, app)
