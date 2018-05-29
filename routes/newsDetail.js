var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newsDetail',{title: 'News Detail'});
});


module.exports = router;
