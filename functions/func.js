function add(num1, num2) {
  
  return num1+num2
  
}

// console.log(add(2,10))
function divide(num1,num2) {
  if (num2 === 0) return null
  return num1 / num2
}
module.exports = {
  add, divide
}