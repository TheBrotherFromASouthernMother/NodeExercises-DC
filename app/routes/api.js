const express = require('express');
const router = express.Router()

const travelInfo = require("../data/travelinfo.json")

router.get('/api', (req, res) => {

  res.send(travelInfo);
})


module.exports = router;
