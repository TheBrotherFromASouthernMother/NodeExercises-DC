var express = require('express');
var router = express.Router();

const fs = require("fs");


router.get("/userPage", (req, res) => {
  res.render("layout", {
    stylesheet: "/css/styles.css",
    title: "A long walk to freedom",
    imageFile: "https://i.imgur.com/Lsrpr1o.jpg",
    footerTitle: "Bury me in the ocean"

  })
})

router.delete("/userPage/:name", (req, res) => {
  let usernameToDelete = req.params.name;
  let data = null;
  try {
    data = fs.readFileSync("userInfo.json")
    data = JSON.parse(data.toString());
  } catch(e) {
    res.send("There is no username with by that name")
  }
  for (let i = 0; i < data.length; i ++) {
    if (data[i].username === usernameToDelete) {
      console.log(data[i], "Has been deleted")
      data.splice(i, 1)
    }
  }
  fs.writeFileSync("userInfo.json", JSON.stringify(data))
  console.log(data)
  res.send("got him coach")

})

module.exports = router;
