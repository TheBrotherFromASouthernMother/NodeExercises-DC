const fs = require("fs");
const gm = require("gm").subClass({imageMagick: true})
const https = require("https");
const request = require("request")

const options = {
  url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  encoding: null
}

request(options, function(err, response, imageData) {
  fs.writeFile("image.png", imageData, (err) => {
    if (err) {
        console.log(err)
    } else {
      console.log('success')
    }

  })
})

gm('/Users/christianlowe/.atom/NodeExercises/image.png').resize(240, 240).write('/Users/christianlowe/.atom/NodeExercises/resizedImage.png', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("done") 
  }
})
