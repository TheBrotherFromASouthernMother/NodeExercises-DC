const password = "kenne";

let guess = "alaph";

function crackPassword(password, guess) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let j = 0
  guess = guess.split("")
  while (password !== guess.join('')) {
    if (j > 10000000000) {
      break;
    }
    for (let i = 0; i < guess.length; i ++) {
      guess[i] = alphabet[Math.floor(Math.random() * Math.floor(alphabet.length - 1))]
    }
    console.log(guess.join(""))
    j ++;
  }
}


crackPassword(password, guess)
