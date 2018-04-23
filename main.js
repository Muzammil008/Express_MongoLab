var express = require('express');
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var app = express();
var db;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
})
MongoClient.connect('url', (err, client) => {
    if (err) return console.log(err)
    db = client.db('abc') // whatever your database name is
   
  })
app.get('/', function (req, res) {
    db.collection('User').find().toArray(function(err, results) {
        console.log(results)
        res.send(results)
        // send HTML file populated with quotes heres
      })
})
app.listen(3000, function () {
    console.log('listening on 3000')
})
