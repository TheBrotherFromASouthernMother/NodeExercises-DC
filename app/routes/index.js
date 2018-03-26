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
        let savedUserData = [];
        savedUserData.push(body)
        console.log(savedUserData)
        fs.writeFileSync("userInfo.json", JSON.stringify(savedUserData));

    });
  });


  res.send("nononono")

  //parsing HTTP request without using body parser package
  // let body = "";
  // req.on('data', (data) => {
  //   body += data;
  // })
  //
  // req.on('end', (data) => {
  //   // body = body.toString();
  //   console.log(body)
  //   fs.writeFileSync("userInfo.json", body);
  //   res.send("nonono")
  // })
})


module.exports = router;
