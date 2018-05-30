var express = require('express');
var router = express.Router();

/* GET News Detail. */
router.get('/:newsId', function(req, res) {
  res.render('newsDetail',{title: req.params.newsId});
});

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/dbVpm', function (err, client) {
  if (err) throw err

  var db = client.db('dbVpm')
  
  db.collection('teams').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})


module.exports = router;


