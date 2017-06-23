const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/directory', function(req, res) {
  res.render('index', data);
});

app.get('/directory/:id', function(req, res) {
  var user;

  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].id == req.params.id){
      user = data.users[i];
    }
  }
  res.render('details', user);
});

app.listen(3000, function() {
  console.log('Listening...');
});
