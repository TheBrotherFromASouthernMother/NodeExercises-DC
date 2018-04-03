// const rp = require('request-promise');
//
// const fs = require('fs');
//
//
// const urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//   'https://en.wikipedia.org/wiki/Google_Chrome'
// ];
//
//
//
// urls.forEach( element => {
//   rp(element).then( html => {
//     let extension = element.slice(30)
//     fs.writeFile(`${__dirname}/WebScrapedPages/${extension}.html`, html, (err) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log('File Saved')
//       }
//
//     })
//   }).catch( err => {
//     console.log('poop')
//   })
// })

console.log(typeof number)

function addNumbers(x, y) {
  return new Promise( (resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y)
    } else {
      reject('Function[addNumbers]: arguments must be of primitive type number')
    }
  })
}

addNumbers("str", 2).then( result => {
  console.log(result)
}).catch( err => {
  console.log(err)
})
