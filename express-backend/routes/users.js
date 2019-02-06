var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username:"somebody"},
    {id: 2, username:"anybody"}
  ]);
});

module.exports = router;
