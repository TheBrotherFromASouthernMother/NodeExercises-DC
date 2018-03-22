var express = require('express');
var router = express.Router();



router.get("/history", (req, res) => {
  res.render("layout", {
    stylesheet: "/css/styles.css",
    title: "A long walk to freedom",
    imageFile: "https://i.imgur.com/Lsrpr1o.jpg",
    footerTitle: "Bury me in the ocean"

  })
})

module.exports = router;
