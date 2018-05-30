var express = require('express');
var router = express.Router();

/* GET News Detail. */
router.get('/:newsId', function(req, res) {
  res.render('newsDetail',{title: req.params.newsId});
});


module.exports = router;