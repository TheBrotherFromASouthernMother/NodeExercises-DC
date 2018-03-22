var express = require('express');
var router = express.Router();


router.get("/", (req, res) => {
  res.render('index', {
    pageTitle: 'home',
    pageID: "home"
  })
})


module.exports = router;
