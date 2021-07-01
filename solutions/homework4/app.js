'use strict'
//ZADANIE18
let str = 'Дана строка. Сделайте заглавным первый символ каждого слова этой строки'
function capitalize(str) {
return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
   
console.log(capitalize(str));

//ZADANIE19


function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(getSum(100));
  

//ZADANIE20

  const sum = [10, 25, 100].reduce(add,0);
  function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);

//ZADANIE21
function calculateRectangleArea(x, y) {
 
  
  let sRectangle= x * y
  return sRectangle
  
}
console.log(sRectangle)
