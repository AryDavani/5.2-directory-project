const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/directory', function(req, res) {

  res.render('index', data);
})


app.listen(3000, function() {
  console.log('Listening...');
})
