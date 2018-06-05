var express = require('express');
var router = express.Router();

//Connect to DB
var MongoClient = require('mongodb').MongoClient
var newsCollectionResult;

MongoClient.connect('mongodb://localhost:27017/dbVpm', function (err, client) {
  if (err) throw err

  var db = client.db('dbVpm')
  
  db.collection('newsCollection').find().toArray(function (err, result) {
    if (err) throw err
    newsCollectionResult = result;
    //console.log(newsCollectionResult);
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { site: 'விழித்திருப்போம் / Vizhithirupom', title: 'விழித்திருப்போம் / Vizhithirupom', newsCollectionList : newsCollectionResult });
});


module.exports = router;