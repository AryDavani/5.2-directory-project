const MongoClient = require('mongodb').MongoClient;

module.exports = {
  index: function(req, res) {
    let context = {};
    MongoClient.connect('mongodb://localhost:27017/imLostdb', function(error, db) {
      const col = db.collection('users');
      col.find().toArray(function(error, results) {
        context.results = results;
        res.render('index', context);
      });
    });

  },
  details: function(req, res) {
    let context = {};
    let userID = parseInt(req.params.id);

    MongoClient.connect('mongodb://localhost:27017/imLostdb', function(error, db) {
      const col = db.collection('users');

      col.find({"id": userID }).toArray(function(error, results) {
        context.results = results;
        res.render('details', context);
      });
    });

  },
  available: function(req, res) {
    let context = {};
    console.log("hello");

    MongoClient.connect('mongodb://localhost:27017/imLostdb', function(error, db) {
      const col = db.collection('users');
      console.log("hello");

      col.find({company: null }).toArray(function(error, results) {
        console.log(results);
        context.results = results;
        console.log('working?');
        res.render('available', context);
      });
    });

  }
};
