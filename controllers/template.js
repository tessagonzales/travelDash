const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index");
  },

  createUser: function(req, res){
  knex("users")
  .insert({
    name: req.body.name,
    email: req.body.email,
    pw: req.body.pw,

  }).then(()=>{
    res.redirect("/")
  })
},
}
