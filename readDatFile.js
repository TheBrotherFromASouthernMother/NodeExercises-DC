const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Give me a file to read mofo: ", (answer) => {
  console.log(answer);
  fs.readFile(answer, function(err, data) {
    if (err) {
      console.log(err)
      return false;

    } else {
      console.log(data.toString())
      return true;
    }

  })
  rl.close()
})
