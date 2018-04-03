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


function addNumbers(x, y) {
  
}
