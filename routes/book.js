var express = require('express');
var router = express.Router();

/* Get home page. */
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

module.exports = router;
