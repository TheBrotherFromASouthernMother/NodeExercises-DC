function math(x, y, callback) {
  let result = callback(x, y);
  console.log(result)
  return result;
}

//Add
math(1, 2, function(x,y){
  return x + y;
})

//Subtract
math(1,2, function(x, y) {
  return x - y;
})

//Greet
math("Hello ", "World", function(x,y) {
  return x + y
})

//Product
math(2, 6, function(x,y) {
  return Array.from(arguments).reduce((x,y) => {
    return x * y
  }, 1)
})
