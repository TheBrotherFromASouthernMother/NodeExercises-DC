var express = require('express');
var router = express.Router();


router.get("/greet/:name/:year", (req, res) => {
  let name = req.params.name;
  let year = req.params.year
  res.render("layout", {
    stylesheet: "/css/styles.css",
    title: name,
    footerTitle: year,
    imageFile: null
  })
})

module.exports = router;
