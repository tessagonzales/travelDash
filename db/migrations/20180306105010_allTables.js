
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users",(table)=>{
    table.increments();
    table.string("name");
    table.string('email');
    table.string('pw')
    table.timestamps(true, true);
})

.createTable("airline",(table)=>{
  table.increments();
  table.string("name");
  table.string('description');
  table.timestamps(true, true);
})

.createTable("flight",(table)=>{
  table.increments();
  table.string("start");
  table.string('destination');
  table.integer('airline_id')
    .references("id")
    .inTable("airline")
    .onDelete("CASCADE")
    .index()
  table.timestamps(true, true);
})

.createTable("trips",(table)=>{
    table.increments();
    table.string("title");
    table.string('description');
    table.integer('user_id')
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .index()
    table.integer('flight_id')
    .references("id")
    .inTable("flight")
    .onDelete("CASCADE")
    .index()
    table.timestamps(true, true);
})


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
  .dropTable('trips')
  .dropTable('airline')
  .dropTable('flight')
};
