'use strict'
//Задача 44
function sum(a) {
  return function someFunction(b) {
    return a + b
  }
}
let rezult = sum(9)(-2)
console.log(rezult)

//Задача 43
function summTo(n) {
  if (n > 1) {
    return n + summTo(n - 1)
  } else {
    return n
  }
}

console.log(summTo(100))
