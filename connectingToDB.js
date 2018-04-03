const pgp = require('pg-promise')({})

const db = pgp({database: 'restaurant'});

let data = null;

db.query("SELECT * FROM restaurant WHERE name = 'Casa Maria" ).then( results => {
  console.log(results)
  data = results;
  console.log(data)
  pgp.end();
}).catch( err => {
  console.log(err)
    pgp.end();
})
