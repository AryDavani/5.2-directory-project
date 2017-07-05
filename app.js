const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const Controllers = require('./controllers/user.js');
const routes = require('./routes.js');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


routes(app);

app.listen(3000, function() {
  console.log('Listening...');
});
