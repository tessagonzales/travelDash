const knex = require("../db/knex.js");

module.exports = {

  //get page to enter user
  index: function(req, res) {
    res.render("index");
  },

//get user/trips page
tripPage: (req, res) => {
  knex('users')
  .then((results)=>{
    res.render('trips', {user:results[0]})
  })
},

//post trip form
 createTrip: (req, res)=>{
   knex('trips')
   .insert({
     name: req.body.name,

   })
   .then(()=>{
     res.redirect('/trips')
   })
 },



} //end of module exports
