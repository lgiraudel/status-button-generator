var buttonGenerator = require('./index.js');
var express = require('express');
var app = express();
var moment = require('moment');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send(buttonGenerator({
    leftColor: '#6762A6',
    rightColor: '#555',
    logo: 'http://localhost:3000/heroku.svg',
    logoWidth: 10,
    leftText: 'Last deploy',
    rightText: moment('2015-07-10', 'YYYY-MM-DD').fromNow(),
    width: 400
  }));
});

var server = app.listen(3000, function() {
  console.log('Server running');
});