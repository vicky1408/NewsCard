var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'விழித்திருப்போம் / Vizhithirupom' });
});

module.exports = router;
