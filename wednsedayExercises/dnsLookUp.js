const dns = require("dns");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What would you like to look up? ", (answer) => {
  dns.lookup(answer, (err, address, family) => {
    if(err) {
      console.log(err)
      return false;
    } else {
        console.log(`Domain name: ${address}\nFamily:${family}`)
    }

  })
  rl.close();
})
