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

//get user/trips and flight dropdown
tripPage: (req, res) => {
    knex('trips')
    .then((trips)=>{
      knex('flight')
      .then((data)=>{
        res.render('trips', {user:req.session.user, trip:trips, flight:data})
      })

  })
},

//post trip form
 createTrip: (req, res)=>{
   knex('trips')
   .insert({
     title: req.body.title,
     description: req.body.description,
     flight_id: req.body.flight_id,
     user_id: req.session.user.id
   }, '*')
   .then(()=>{
     res.redirect(`/trips`)
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
     //console.log(req.session.user.id)
     req.session.save(()=>{
        res.redirect(`/trips`)
     })
 })
<<<<<<< HEAD
=======
},

 addAirline: function(req, res){
   knex("airline")
   .insert({
     name: req.body.name,
     description: req.body.description,
   }).then(()=>{
     res.redirect('/airline/new')
   })
>>>>>>> 3ad5de453e26be862003273ebffe4439583fe98e
},

   airlineNew: function(req, res){
     knex("airline")

     .then(()=>{
       res.render('airlineNew')
     })

},

  login: function(req, res){
    knex('airline')
      .then((data)=>{
        res.render('airlineLogin', {airline:data})
      })

  },

} //end of module exports
