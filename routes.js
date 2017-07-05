const Controllers = require('./controllers/user.js');

module.exports = function(app){
    app.get('/directory', Controllers.index);
    app.get('/directory/:id', Controllers.details);
    // app.get('/available', Controllers.available);
  };
