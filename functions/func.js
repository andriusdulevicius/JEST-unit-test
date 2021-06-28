function add(num1, num2) {
  
  return num1+num2
  
}

// console.log(add(2,10))
function divide(num1,num2) {
  if (num2 === 0) return null
  return num1 / num2
}

function showValue(val) {
  return val
}


function notMoreThan(num) {
  const goods1 = 200;
  const goods2 = 150;
  return goods1 + goods2 < num ? true : false
}

module.exports = {
  add, divide, showValue, notMoreThan
}