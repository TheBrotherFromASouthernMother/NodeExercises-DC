const express = require('express');
const router = express.Router();

router.get("/travel", (req, res) => {
  res.render('travel')
})

module.exports = router;
