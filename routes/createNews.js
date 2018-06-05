var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;


router.get('/', function(req, res) {
    res.render('createNews',{site: 'விழித்திருப்போம் / Vizhithirupom', title: 'Create News'});
});

module.exports = router;