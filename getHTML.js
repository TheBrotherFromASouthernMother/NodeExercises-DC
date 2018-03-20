const https = require("https");

https.get("https://www.google.com/", (res) => {
  console.log('statusCode', res.statusCode)


  res.on('data', (data) => {
    console.log(data.toString())
  })

  res.on('error', (error) => {
    console.log(error)
  })
})
