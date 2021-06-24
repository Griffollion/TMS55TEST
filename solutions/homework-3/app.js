// задание 1
let a = 1
let b = 2
let c = ' белых медведей'
let resultAssignment = String(a) + b + c
console.log(`Решение задачи 1: ${resultAssignment}`)

// задание 2
let a1 = 10
let b1 = 2
let c1 = 5
let summaVariables = a1 + b1 + c1
alert (`Решение задачи 2: ${summaVariables}`)
console.log(`Решение задачи 2: ${summaVariables}`)

// задание 3
let num = 10;
num = ++num;
num = ++num;
num = --num;
alert(`Решение задачи 3: ${num}`);
console.log(`Решение задачи 3: ${num}`)

// задание 4
let numbers = [5, 29, 11, 33, 13, 76, 4, 9]
let iAmBigNumber = 0
for (i=0; i < numbers.length; i++){
    if (numbers [i] > iAmBigNumber){
        iAmBigNumber = numbers [i]
    } 
}
console.log(`Решение задачи 4: большее из чисел - ${iAmBigNumber}`)

// задание 5
let a6 = 5 % 3
let a7 = 3 % 5
let a8 = 5 + '3'
let a9 = '5' - 3
let a10  = 75 + 'кг'

console.log(`Решение задачи 5: ${a6}, ${a7}, ${a8}, ${a9}, ${a10}`)

// задание 6
let number = [5, 29, 11, 33, 13, 76, 4, 9]
let iAmSmallNumber = 999999999n
for (i=0; i < number.length; i++){
    if (number [i] < iAmSmallNumber){
        iAmSmallNumber = number [i]
    } 
}
console.log(`Решение задачи 6: меньшее из чисел - ${iAmSmallNumber}`)

// задание 7
console.log(`Решение задачи 7:`)
for (i = 0; i < 16; i++){
    if (i % 2 == 0) {
        console.log (`${i} - четное число`)
    } else { 
        console.log (`${i} - нечетное число`)
    }
}

// задание 8
console.log(`Решение задачи 8:`)
for (i = 1; i < 101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} - I am FizzBuzz`)
    } else if (i % 3 == 0) {
        console.log(`${i} - I am Fizz`)
    } else if (i % 5 == 0) {
        console.log(`${i} - I am Buzz`)  
    }
}
// задание 9
console.log(`Решение задачи 9:`)
let summaThree = 0
let summaFour = 0
for (i = 1; i < 1001; i++){
     if (i % 3 == 0 && i % 4 == 0){
         summaThree += i;
       summaFour += i;
   } else if (i % 3 == 0){
         summaThree += i;
   } else if (i % 4 == 0){
        summaFour += i;
    }
 }
console.log (`сумма всех чисел кратных 3: ${summaThree}`)
console.log (`сумма всех чисел кратных 4: ${summaFour}`)

// задание 10
let someNumberA =  [-11, 3, -2]
for (i = 0; i < 3; i++){
 if (someNumberA[i] < 0) {
     someNumberA[i] = '-';
 } else {
     someNumberA[i] = ' ';
 }
}
alert (`Знаки чисел a1, a2, a3: ${someNumberA[0]}, ${someNumberA[1]}, ${someNumberA[2]}`)
console.log(`Решение задачи 10: Знаки чисел a1, a2, a3: ${someNumberA[0]}, ${someNumberA[1]}, ${someNumberA[2]}`)

// задание 11

let str = 'Привет';
let num1 = 123;
let flag = true;
let txt = 'true';
console.log(`Решение задачи 11: 'Привет' - это ${typeof str}, 123 - ${typeof num1}, true - ${typeof flag}, 'true' - ${typeof txt}`)

// задание 12

let d1 = (5 + 3) * (5 - 3)
let b2 = (10 - 6) * 200
let b3 = (534 * 132) / 18
let b4 = 123 * 3 + 10
let b5 = 12 * 13 * 14

console.log(`Решение задачи 12: d1=${d1}, b2=${b2}, b3=${b3}, b4=${b4}, b5=${b5}`)

// задание 13

let randomNumber = prompt('Введите любое число')
if (randomNumber % 2 == 0) {
    alert ('Это четное число');
} else {
    alert('Это нечетное число');
}

// задание 14

let creditAmount = 1000
let creditSumma = 0
const percent = 10
let yearPercent

for (i = 0; i < 5; i++) {
yearPercent = creditAmount * percent / 100 
creditSumma += yearPercent
creditAmount -= 200
}

console.log (`Решение задачи 14: процент по кредиту на 5 лет составит ${creditSumma} рубль`)

// задание 15

let usersData = [
    {
       name: 'Ivan',
       age: 18
    },
    {
        name: 'Petr',
        age: 12
    },
    {
        name: 'Sidor',
        age: 25
    },
    {
        name: 'Dima',
        age: 5
    },
    {
        name: 'Katja',
        age: 30
    }
]

let adults = []
let minors = []

for (i = 0; i < usersData.length; i++){
    if (usersData[i].age < 18) {
        minors.push(usersData[i].name);
    } else{
        adults.push(usersData[i].name);
    }
}

console.log (`Решение задачи 15: совершеннолетние: ${adults}, несовершеннолетние: ${minors}`)

// задание 16

let symbol = '#'
for (i=0; i < 10; i++){    
console.log(`${symbol}\n`)
symbol += '#'
}

