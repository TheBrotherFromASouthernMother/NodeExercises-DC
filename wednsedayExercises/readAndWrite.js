const fs = require("fs");


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Which file would you like to capitalize? ", (answer) => {
  let user_input = ""
  fs.readFile(answer, function(err, data){
    if (err) {
      console.log(err)
    } else {
      console.log(data.toString())
      fs.writeFileSync("message.txt", data, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(arguments[1])
        }
      })
    }
  });
  // user_input = user_input.toUpperCase();
  // console.log(user_input)


  rl.close();
})
