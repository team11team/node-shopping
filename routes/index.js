var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const array=["jhone","mac","abraha lincon"]
  var person={name:'become rich', admin:true}

  res.render('index', {person});
});

module.exports = router;
