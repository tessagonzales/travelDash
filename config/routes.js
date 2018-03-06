//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  //get page to enter user
  app.get('/', template.index);

  //add user data
  app.post('/createUser', template.createUser);

  //get user/trips page and flight dropdown
  app.get('/trips', template.tripPage);

  //post trip form
  app.post('/trips/create', template.createTrip);

  //get new airline form
  app.get('/airline/new', template.airlineNew);

  //post airline form
  app.post('/airline/new', template.addAirline);

  //form asking which airline they belong to
  app.get('/airline/login', template.login);

  //get all airlines
  app.get('/airline', template.getAirlines);

  app.post('/airline', template.createFlight);

}
