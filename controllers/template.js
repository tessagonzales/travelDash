const knex = require("../db/knex.js");

module.exports = {

  //get page to enter user
  index: function(req, res) {
    if(!req.session.user){
      req.session.user = {};
    }
    req.session.save(()=>{
    res.render("index");
  })
  },

//get user/trips page
tripPage: (req, res) => {
    res.render('trips', {user:req.session.user})
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
 }, '*').then((data)=> {
     req.session.user = data[0];
     console.log(req.session.user.id)
     req.session.save(()=>{
        res.redirect(`/trips`)
     })
 })

},


} //end of module exports
