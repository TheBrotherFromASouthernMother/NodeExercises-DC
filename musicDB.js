
const pgp = require('pg-promise')({})

const db = pgp({database: 'christianlowe'});


const co = require('co');
const prompt= require('prompt-promise');

let album = {}

prompt('Album name?: ').then( answer => {
  album.name = answer;
  return prompt('Album year?: ');
}).then( (year) => {
  album.year = year;
  albumToDB(album)
  prompt.done();
}).catch( err => {
  console.log(err);
  prompt.done();
})



function albumToDB(album) {
  let query = `INSERT INTO music VALUES (nextval('album_id_seqs'), $1, $2)`;
  db.result(query, [album.name, album.year]).then( result => {
    console.log(result.command)
    pgp.end();
  }).catch( err => {
    console.log(err)
    pgp.end();
  })
}
