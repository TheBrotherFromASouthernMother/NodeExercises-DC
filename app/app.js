
const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const dataFile = require('./data/data.json');

const petFile = require('./data/pet.json')

app.set('view engine', 'ejs');
app.set('views', 'app/views'); //views folder

app.use(bodyParser.urlencoded({extended: true}))

app.use(require("./routes/index.js")); //page index.ejs
app.use(require("./routes/speakers.js"));
app.use(require("./routes/greet.js"))
app.use(require("./routes/history.js"))


app.get("/ajaxTest", (req, res) => {
  res.render('ajaxTest');
})

app.get("/AJAXCALL", (req, res) => {
  res.send("<h2> I am nothing but a man </h2>")
})

app.get("/pet", (req, res) => {
  res.render('pet')
})

app.use(express.static("app/public"))


var server = app.listen(3000, function(){
    console.log('Example app listening on port ');
});

//
// reload(server, app)
