/* //Задание 1
let a1 = 1
let b1 = 2
let c1 = '  белых медведей'
b1 += c1
a1 += b1
console.log(a1) */

/* //Задание 2
let a2 = 10
let b2 = 2
let c2 = 5
let summ = a2 + b2 + c2
console.log(summ)
alert (summ) */

/* //Задание 3
let num = 10;
num++;
num++;
num--;
alert(num); */

/* //Задание 4
let a4 = 115
let b4 = 3
let c4 = 1290
let d4 = 65
let e4 = 512
let maxNumber = Math.max(a4, b4, c4, d4, e4)
console.log(maxNumber) */

/* //Задание 5
let a5 = 5 % 3
let b5 = 3 % 5
let c5 = 5 + '3'
let d5 = '5' - 3
let e5 = 75 + 'кг'
alert (a5, b5, c5, d5, e5)
console.log(a5, b5, c5, d5, e5)  */

/* //Задание 6
let a6 = 9
let b6 = 6
if (a6 > b6) {
    alert (a6)
}
else if (typeof(a6) != 'number' || typeof(b6) != 'number') {
    alert ("incorrect input")
}
else if (a6 === b6) {
    alert ("numbers are equal")}
else    
 {
    alert (b6)
}  */

/* //Задание 7

for (i=0; i<=15; i++) {
    if (i % 2 == 0 && i != 0) alert (`${i} это четное`)
    else if (i % 2 == 1 && i != 0) alert (`${i} это нечетное`)
} */

/* //Задание 8
for (i=0; i<=100; i++) {
    if (i % 3 == 0 && i != 0) alert (`${i} Fizz`)
    else if (i % 5 == 0 && i != 0) alert (`${i} Buzz`)
    else if (i % 3 == 0 && i % 5 == 0 && i != 0) (`${i} FizzBuzz`)
} */

/* //Задание 9 
let a = 0
for (i=0; i<=100; i++) {
    if (i % 3 == 0 || i % 4 == 0) {
    console.log(i)
    a = a + i
}
}
console.log(a) */

/* //Задание 10 
let a10 = 9
let b10 = -17
let c10 = -4
if (a10 < 0) characterA = '-'
else characterA = ' '
if (b10 < 0) characterB = '-'
else characterB = ' '
if (c10 < 0) characterC = '-'
else characterB = ' '
alert (`Знаки чисел a10, b10, c10: ${characterA}, ${characterB}, ${characterC}`) */

/* //Задание 11
let str = 'Привет'
let num = 123
let flag = true
let txt = 'true'
console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(flag))
console.log(typeof(txt)) */

/* //Задание 12
let a12 = (5 + 3) * (5 - 3)
let b12 =  (10 - 6) * 200 
let c12 = (534 * 132) / 18
let d12 = 123 * 3 + 10
let e12 = 12 * 13 * 14
console.log (a12, b12, c12, d12, e12) */

/* //Задание 13 
let result = prompt('Enter any number', '')
if (result % 2 == 0) alert('even number')
else alert('odd number') */

/* //Задание 14
let creditAmount = 1000
let percentageRate = 10
let creditTerm = 5
let percentageAmount = (creditAmount * percentageRate * creditTerm) / 100
console.log(percentageAmount) */

/* //Задание 15
let product = {
     name: 'chair',
     price: '15 USD',
     type: 'garden chair',
    releaseDate:'16.09.2020',
    manufacturer: 'Chairs World Ltd.', 
    country:'China',
    isGaranty:'3 months guarantee'
}
console.log(product.name, product.price, product.type, product.releaseDate, 
    product.manufacturer, product.country, product.isGaranty) */

/* //Задание 16 
var users = [
    {
      name: "Masha",
      age: 14
    },
    {
      name: "Denis",
      age: 28
    },
    {
      name: "Liza",
      age: 35
    },
    {
      name: "Sergey",
      age: 61,
    },
    {
      name: "Alex",
      age: 17,
    }
  ]
  const adultPeople = [] 
  const minorPeople = [] 
  for(let i = 0; i < users.length; i++) {
      if (users[i].age < 18) {
        minorPeople.push(users[i]);
      } else {
        adultPeople.push(users[i]);
      }
  }
  console.log('Adults',adultPeople)
  console.log('Minors',minorPeople) */

  //Задание 17
  for (let i=1, chr = ''; i<7; i++) {
    chr += '#'
    console.log(chr)
  }


