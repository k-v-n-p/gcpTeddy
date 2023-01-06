var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    console.log("here")
    res.status(200);
    res.json({
      x: [1, 2, 3],
      y: [2, 6, 3],
      //pts: [(1,2),(2,6),(3,3)]
  })
  });

  module.exports = router;