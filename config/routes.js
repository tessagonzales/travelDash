//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  //get page to enter user
  app.get('/', template.index);

  //add user data
  app.post('/createUser', template.createUser);

  //get user/trips page
  app.get('/trips', template.tripPage);

  //post trip form
  app.post('/trips/create', template.createTrip);

  app.get('/airline/new', template.airlineNew);

  app.post('/airline/new', template.addAirline);

  app.get('/airline/login', template.login);

}
