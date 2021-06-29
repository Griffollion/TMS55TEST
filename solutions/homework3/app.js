// Задание №1

let a1 = 1
let b1 = 2
let c1 = " белых медведей"


let resualt1 = b1 + c1
resualt1 = a1 + resualt1

console.log ('Ответ на задание №1: ', resualt1)

// Задание №2
console.log(' ') //разделитель для заданий в консоли
const a2 = 10
const b2 = 2
const c2 = 5

const sum2 = a2 + b2 + c2
console.log ('Ответ на задание №2: ',sum2)
document.write('Ответ на задание №2: ',sum2)

// Задание №3

let num3 = 10;
++num3
++num3
--num3
alert('Ответ на задание №3: '+ num3);

//Задание №4
console.log(' ')
let a4 = 10
let b4 = 35
let c4 = 76
let d4 = -18
let f4 = 1

let min = a4

if (min > b4)
{
 min = b4
}


if (min > c4)
{
 min = c4
}


if (min > d4)
{
 min = d4
}


if (min > f4)
{
 min = f4
}


console.log ('Ответ на задание №4. Минимальное число из',a4,', ',b4,', ',c4,', ',d4,', ',f4, ': ',min)


//Задание №5

console.log(' ') //разделитель для заданий в консоли

let a65 = 5 % 3
let a75 = 3 % 5
let a85 = 5 + '3'
let a95 = '5' - 3
let a105 = 75 + 'кг'
console.log('Ответ на задание №5:')
console.log('a6 = ', a65)
console.log('a7 = ', a75)
console.log('a8 = ', a85)
console.log('a9 = ', a95)
console.log('a10 = ', a105)

//Задание №6
console.log(' ')

let a6 = 37
let b6 = 97

let resualt6 = Math.min (a6,b6);

console.log('Ответ на задание №6: наименьшее значание из чисел ', 37,'и ', 97,' = ', resualt6)

//Задание №7
console.log(' ') //разделитель для заданий в консоли
console.log('Ответ на задание №7:')
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
console.log (i + ' это четное число')
    }
    else {
        console.log (i + ' это нечетное число')
    }
}

//Задание №8
console.log(' ') //разделитель для заданий в консоли
console.log('Ответ на задание №8:')

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log (i,'FizzBuzzо')
    }
    else if (i % 3 == 0) {
console.log (i, 'Fizz')
    }
   else if (i % 5 == 0) {
        console.log (i,'Buzz')
            }
    
}

//Задание №9
console.log(' ') //разделитель для заданий в консоли
console.log('Ответ на задание №9:')
let sumOne = 0
let sumTwo = 0
let sumThree = 0
for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        sumThree = sumThree + i
    }
    if (i % 4 == 0) {
        sumOne = sumOne + i
    }
  else if (i % 3 == 0) {
    sumTwo = sumTwo + i
    }
    
}
console.log ('Сумма чисел, кратных 4 в диапазоне от 0 до 1000 = ', + sumOne)
console.log ('Сумма чисел, кратных 3 в диапазоне от 0 до 1000 = ', + sumTwo)
console.log ('Сумма чисел, кратных и 3, и 4 в диапазоне от 0 до 1000 = ', + sumThree)

//Задание №10
console.log(' ')
let a10 = 785
let b10 = -10
let c10 = -77
let a10S = null
let b10S = null
let c10S = null


if (a10 < 0)
{
 a10S='-'
}
else {
    a10S=' '
}


if (b10 < 0)
{
 b10S='-'
}
else {
    b10S=' '
}

if (c10 < 0)
{
 c10S='-'
}
else {
    c10S=' '
}


console.log ('Ответ на задание №10. Знаки чисел',a10,', ',b10,', ',c10,':', a10S,',', b10S,',', c10S)

//Задание №11
console.log(' ') //разделитель для заданий в консоли
const str11 = 'Привет'
const num11 = 123
const flag11 = true
const txt11 = 'true'
console.log('Ответ на задание №11:')
console.log('Тип данных переменной str:', typeof(str11))
console.log('Тип данных переменной num:', typeof(num11))
console.log('Тип данных переменной flag:', typeof(flag11))
console.log('Тип данных переменной txt:', typeof(txt11))

//Задание №12
console.log(' ') //разделитель для заданий в консоли
let a1Z12 = (5 + 3) * (5 - 3)
let a2Z12 = (10 - 6) * 200
let a3Z12 = (534 * 132) / 18
let a4Z12 = 123 * 3 + 10
let a5Z12 = 12 * 13 * 14
console.log('Ответ на задание №12:')
console.log('(5 + 3) * (5 - 3) = ',a1Z12)
console.log('(10 - 6) * 200 = ',a2Z12)
console.log('(534 * 132) / 18 = ',a3Z12)
console.log('123 * 3 + 10 = ',a4Z12)
console.log('12 * 13 * 14 = ',a5Z12)

//Задание №13
console.log(' ') //разделитель для заданий в консоли
const num12 = prompt ("Задание 13. Введи число", '')
if (num12 % 2==0) {
    alert ('Ты указал чётное число')
}
else {
    alert ('Ты указал нечётное число')
}


//Задание №14
console.log(' ') //разделитель для заданий в консоли

const loanАmount14 = 1000
const yearLoan14 = 5
const interestRate14 = 10
const annualPayment14 = loanАmount14/yearLoan14
const yearsumprocent14 = annualPayment14*10/100
const overpayment14 = (loanАmount14 - (yearLoan14*(annualPayment14+yearsumprocent14))) * -1

console.log('Ответ на задание №14:',overpayment14)


//Задание №15
console.log(' ') //разделитель для заданий в консоли

const product = {
    name: 'Молоко',
    price: 3,
    type: 'Продукт питания',
    country: 'Беларусь',
    isGaranty: false
}
console.log('Ответ на задание №15:')
console.log ('name: ',product.name)
console.log ('price: ',product.price, 'BYN')
console.log ('type: ',product.type)
console.log ('isGaranty: ',product.isGaranty)


//Задание №16
console.log(' ')

const users = [
    {
      name: "Игорь",
      age: 35,

    },
    {
      name: "Юлия",
      age: 14,

    },
    {
      name: "Сергей",
      age: 10,

    },
    {
        name: "Олег",
        age: 33,
  
      },
    
  ]
  const adultUser = [] 
  const minorUser = [] 
  
  for(let i = 0; i < users.length; i++) {
      if (users[i].age > 18) {
        adultUser.push(users[i]);
      } else {
        minorUser.push(users[i]);
      }
  }
  console.log('Ответ на задание №16:')
  console.log('Совершеннолетние пользователи: ',adultUser)
  console.log('Несовершеннолетние пользователи:',minorUser)

  //Задание №17
console.log(' ')

let string17="#"
console.log('Ответ на задание №17:')
for (let i=0 ; i  <= 6 ; i++){

    console.log (string17.repeat(i), '\n')
}