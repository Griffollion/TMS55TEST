// Задание №1

let a_1 = 1
let b_1 = 2
let c_1 = " белых медведей"

let resualt_1 = String(a_1) + String(b_1) + c_1

console.log ('Ответ на задание №1: ', resualt_1)

// Задание №2
console.log(' ') //разделитель для заданий в консоли
const a_2 = 10
const b_2 = 2
const c_2 = 5

const sum_2 = a_2 + b_2 + c_2
console.log ('Ответ на задание №2: ',sum_2)
document.write('Ответ на задание №2: ',sum_2)

// Задание №3

let num_3 = 10;
num_3 = ++num_3;
num_3 = ++num_3;
num_3 = --num_3;
alert('Ответ на задание №3: '+ num_3);

//Задание №4
console.log(' ')
let a_4 = 10
let b_4 = 35
let c_4 = 76
let d_4 = -18
let f_4 = 1

let min = a_4

if (min > b_4)
{
 min = b_4
}


if (min > c_4)
{
 min = c_4
}


if (min > d_4)
{
 min = d_4
}


if (min > f_4)
{
 min = f_4
}


console.log ('Ответ на задание №4. Минимальное число из',a_4,', ',b_4,', ',c_4,', ',d_4,', ',f_4, ': ',min)


//Задание №5

console.log(' ') //разделитель для заданий в консоли

let a6_5 = 5 % 3
let a7_5 = 3 % 5
let a8_5 = 5 + '3'
let a9_5 = '5' - 3
let a10_5 = 75 + 'кг'
console.log('Ответ на задание №5:')
console.log('a6 = ', a6_5)
console.log('a7 = ', a7_5)
console.log('a8 = ', a8_5)
console.log('a9 = ', a9_5)
console.log('a10 = ', a10_5)

//Задание №6
console.log(' ')

let a_6 = 37
let b_6 = 97

let resualt_6 = Math.min (a_6,b_6);

console.log('Ответ на задание №6: наименьшее значание из чисел ', 37,'и ', 97,' = ', resualt_6)

//Задание №7
console.log(' ') //разделитель для заданий в консоли
console.log('Ответ на задание №7:')
for (i = 0; i <= 15; i++) {
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

for (i = 0; i <= 100; i++) {
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
let sum_9_one = 0
let sum_9_two = 0
for (i = 0; i <= 1000; i++) {
    if (i % 4 == 0) {
        sum_9_one = sum_9_one + i
    }
  else if (i % 3 == 0) {
    sum_9_two = sum_9_two + i
    }
    
}
console.log ('Сумма чисел, кратных 4 в диапазоне от 0 до 1000 = ', + sum_9_one)
console.log ('Сумма чисел, кратных 3 в диапазоне от 0 до 1000 = ', + sum_9_two)

//Задание №10
console.log(' ')
let a_10 = 785
let b_10 = -10
let c_10 = -77
let a_10s = undefined
let b_10s = undefined
let c_10s = undefined


if (a_10 < 0)
{
 a_10s='-'
}
else {
    a_10s=' '
}


if (b_10 < 0)
{
 b_10s='-'
}
else {
    b_10s=' '
}

if (c_10 < 0)
{
 c_10s='-'
}
else {
    c_10s=' '
}


console.log ('Ответ на задание №10. Знаки чисел',a_10,', ',b_10,', ',c_10,':', a_10s,',', b_10s,',', c_10s)

//Задание №11
console.log(' ') //разделитель для заданий в консоли
const str_11 = 'Привет'
const num_11 = 123
const flag_11 = true
const txt_11 = 'true'
console.log('Ответ на задание №11:')
console.log('Тип данных переменной str:', typeof(str_11))
console.log('Тип данных переменной num:', typeof(num_11))
console.log('Тип данных переменной flag:', typeof(flag_11))
console.log('Тип данных переменной txt:', typeof(txt_11))

//Задание №12
console.log(' ') //разделитель для заданий в консоли
let a1_12 = (5 + 3) * (5 - 3)
let a2_12 = (10 - 6) * 200
let a3_12 = (534 * 132) / 18
let a4_12 = 123 * 3 + 10
let a5_12 = 12 * 13 * 14
console.log('Ответ на задание №12:')
console.log('(5 + 3) * (5 - 3) = ',a1_12)
console.log('(10 - 6) * 200 = ',a2_12)
console.log('(534 * 132) / 18 = ',a3_12)
console.log('123 * 3 + 10 = ',a4_12)
console.log('12 * 13 * 14 = ',a5_12)

//Задание №13
console.log(' ') //разделитель для заданий в консоли
const num_12 = prompt ("Задание 13. Введи число", '')
if (num_12%2==0) {
    alert ('Ты указал чётное число')
}
else {
    alert ('Ты указал нечётное число')
}


//Задание №14
console.log(' ') //разделитель для заданий в консоли

const loanАmount_14 = 1000
const yearLoan_14 = 5
const interestRate_14 = 10
const annualPayment_14 = loanАmount_14/yearLoan_14
const yearsumprocent_14 = annualPayment_14*10/100
const overpayment_14 = (loanАmount_14 - (yearLoan_14*(annualPayment_14+yearsumprocent_14))) * -1

console.log('Ответ на задание №14:',overpayment_14)


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

let string_17="#"
console.log('Ответ на задание №17:')
for (i=0 ; i  <= 6 ; i++){

    console.log (string_17.repeat(i), '\n')
}