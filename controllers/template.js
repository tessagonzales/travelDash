const knex = require("../db/knex.js");

module.exports = {

  //get page to enter user
  index: function(req, res) {
    if(!req.session.id){
      req.session.id = [];
    }
    req.session.save(()=>{
    res.render("index");
  })
  },

//get user/trips page
tripPage: (req, res) => {
  knex('users')
  .where('id', req.session.id)
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
     res.redirect(`/trips/${req.params.id}`)
   })
 },

 //create user
 createUser: function(req, res){
 knex("users")
 .insert({
   name: req.body.name,
   email: req.body.email,
   pw: req.body.pw,
 }).then(()=> {
   req.session.id.push(req.body.id);



 }).then(()=>{
   res.redirect(`/trips/${req.session.id}`)
 })

},


} //end of module exports
