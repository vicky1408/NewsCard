var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
var newsCollectionResult;
var newsTimelineResult;

/* GET News Detail. */
router.get('/:newsId', function(req, res) {

  var postId = req.params.newsId;
  //Connect to DB
  MongoClient.connect('mongodb://localhost:27017/dbVpm', function (err, client) {
    if (err) throw err

    var db = client.db('dbVpm')
    
    db.collection('newsCollection').find({
      $and:[{"postId":postId}]
    }).toArray(function (err, result) {
      if (err) throw err
      newsCollectionResult = result;
      //console.log(newsCollectionResult);

      db.collection('newsTimeline').find({
        $and:[{"postId":postId}]
      }).toArray(function(tlErr, tlResult) {
        newsTimelineResult = tlResult;
        
        res.render('newsDetail',{site: 'விழித்திருப்போம் / Vizhithirupom', title: newsCollectionResult[0].title, newsDocument: newsCollectionResult, newsTimelineDocument: newsTimelineResult});
      })


    })
  })

});

module.exports = router;


