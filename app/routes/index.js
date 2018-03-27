const express = require('express');
const router = express.Router();

const fs = require("fs")

const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  res.render('index', {
    pageTitle: 'home',
    pageID: "home"
  })
})

router.post("/", (req, res) => {
  var body = req.body
  const saltRounds = 10;
  const plainTextPassword = req.body.password;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        body.password = hash;
        let savedUserData = null;
        try {
          savedUserData = fs.readFileSync("userInfo.json");
          savedUserData = JSON.parse(savedUserData.toString());

        } catch(e) {
          savedUserData = [];
        }
        savedUserData.push(body)
        console.log(savedUserData)
        fs.writeFileSync("userInfo.json", JSON.stringify(savedUserData));

    });
  });
  res.redirect('/userPage')
})


module.exports = router;
