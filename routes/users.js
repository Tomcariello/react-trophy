var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  //Default response
  //res.send('respond with a resource');

  //Create static json Users object to return to react
  res.json([{
    id: 1,
    username: "User01"
  }, {
    id: 2,
    username: "User02"
  }])
});

module.exports = router;
