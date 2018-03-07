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

},

//create airline form
 addAirline: function(req, res){
   knex("airline")
   .insert({
     name: req.body.name,
     description: req.body.description,
   }, '*').then((data)=>{
     req.session.airline = data[0]
     //console.log(req.session.airline)
     req.session.save(()=>{
        res.redirect('/airline/new')
     })

   })

},

  //get new airline form
   airlineNew: function(req, res){
     if(!req.session.airline){
       req.session.airline = {};
     }
     knex('airline')
     .then(()=>{
       req.session.save(()=>{
       res.render("airlineNew");
     })
   })
},

 //form asking which airline they belong to
  login: function(req, res){
    knex('airline')
      .then((data)=>{
        res.render('airlineLogin', {airline:data})
      })

  },

  //get all airlines
  getAirlines: (req, res) => {
    knex('airline')
    .then((data)=>{
      res.render('all_airlines', {airline:req.session.airline})
    })
  },

  //create flights post
  createFlight: (req, res) =>{
    knex('flight')
    .insert({
      start: req.body.start,
      destination: req.body.destination,
      airline_id: req.session.airline.id
    }, '*')
    .then((data)=>{
      //req.session.user = data[0];

      req.session.save(()=>{
         res.redirect(`/airline`)
      })

    })
  },

  //choose airline
  chooseAirline: (req, res) => {
    knex('airline')
    .insert({
      name: req.session.airline.name
    }).then(()=>{
      req.session.save(()=>{
        res.redirect(`/airline`)
      })
    })
  }

} //end of module exports
