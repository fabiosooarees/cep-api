var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'user', 
    password : 'password',
    database : 'db'
  }
});

module.exports = knex