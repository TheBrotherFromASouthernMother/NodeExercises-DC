const express = require('express')
const app = express()

const pg = require('pg');
const format = require('pg-format');

const user = "christianlowe";

const database = "sql-crud";

const config = {
  user: user,
  database: database,
  max: 5,
  idleTimeoutMillis: 30000
}

let pool = new pg.Pool(config);

let myClient;

pool.connect(function (err, client, done) {
  if (err) console.log(err)
  // app.listen(3000, function () {
  //   console.log('listening on 3000')
  // })

  myClient = client;


  ageQuery = format('SELECT age FROM dogs WHERE name = \'Floyd\'');
  myClient.query(ageQuery, function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log(result.rows)
  pool.end();
  myClient.end()
  })

})
