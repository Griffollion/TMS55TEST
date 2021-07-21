//Задание 1
//a = 1,
//b = 2,
//c = " белых медведей"
//console.log(a + (b + c))

//Задание 2
//let a = 10
//let b = 2
//let c = 5
//alert(a + b + c)
//console.log(a + b + c)

//Задание 3
//let num = 10;
//num++;
//num++;
//num--;
//alert(num);

//Задание 4
//let number1 = 1
//let number2 = 2
//let number3 = 3
//let number4 = 4
//let number5 = 5
//console.log (Math.max(number1,number2,number3,number4,number5))

//Задание 5
//let a6 = (5 % 3)
//let a7 = (3 % 5)
//let a8 = (5 + '3')
//let a9 = ('5' - 3)
//let a10 = (75 + 'кг')
//console.log(a6 + ',', a7 + ',', a8 + ',', a9 + ',', a10)

//Задание 6
//let variable1 = 5
//let variable2 = 3
//alert(Math.min(variable1, variable2))


//Задание 7
//for (var i = 0; i <= 15; i++){
//    if (i & 1){
//        console.log(i + 'это нечетное число')
//    } else {
//        console.log(i + 'это четное число')
//    }
//}

//Задание 8
//let number = 1000
//for (var i = 0; i <= number; i++){
//    if (i % 3 === 0 && i % 5 === 0){
//        console.log ('FizzBuzz')
//    } else if (i % 3 === 0){
//        console.log ('Fizz')
//    } else if (i % 5 === 0){
//        console.log('Buzz')
//   }
//}

//Задание 9
// let number = 1000
// let total3 = 0
// let total4 = 0
// let total3and4 = 0
// for (var i = 0; i <= number; i++){
//    if ((i % 3 === 0) && (i % 4 === 0)) {
//     total3and4 += i 
//    } else if (i % 3 === 0) {
//     total3 += i
//    } else if (i % 4 === 0) {
//     total4 += i
//    }       
// } 
// console.log('Число кратное трем ' + total3)
// console.log('Число кратное четырем ' + total4)
// console.log('Число кратное трем и четырем ' + total3and4)

//Задание 10
// let a1 = -10
// let a2 = 5
// let a3 = -33

// if (a1 < 0 && a2 >= 0 && a3 < 0){
//    alert('Знаки чисел a1, a2, a3:' + '-' + ',' + ' ' + ',' + '-')
// }

// if (a1 > 0 && a2 < 0 && a3 > 0){
//     alert('Знаки чисел a1, a2, a3:' + ' ' + ',' + '-' + ',' + ' ')
//  }

//Задание 11
//let str = 'Привет'
//let num = 123
//let flag = true
//let txt = Boolean('true')
//console.log(typeof str)
//console.log(typeof num)
//console.log(typeof flag)
//console.log(typeof txt)

//Задание 12
//let a1 = (5 + 3) * (5 - 3)
//let a2 = (10 - 6) * 200
//let a3 = (534 * 132) / 18
//let a4 = 123 * 3 + 10
//let a5 = 12 * 13 * 14
//console.log(a1 + ',', a2 + ',', a3 + ',', a4 + ',', a5)

//Задание 13
//let x = prompt('Пожалуйста, введите цифру!')
//
//if (x & 1){
//    alert(x + ' это нечетное число')
//} else {
//    alert(x + ' это четное число')
//}

//Задание 14
//let credit = 1000
//let procent = 10
//let years = 5 
//let costing = (credit / 100) * procent
//console.log((costing + credit) * years)

//Задание 15
//let product = {
//    name: 'Galaxy S20',
//    price: '800$',
//    type: 'mobile phone',
//    releaseDate: '11 February 2020',
//    manufacturer: 'Samsung Electronics',
//    country: 'Korea',
//    isGaranty: '1 years'
//}
//console.log(product.name, product.price, product.type, product.releaseDate, product.manufacturer,
//    product.country, product.isGaranty)

//Задание 16
//const users = [ 
//    {
//        name: 'Ivan', 
//        age: 18
//    },
//    {
//        name: 'Petr', 
//        age: 12
//    },
//   {
//        name: 'Sidor', 
//        age: 25
//    },
//    {
//        name: 'Alex', 
//        age: 28
//    },
//    {
//        name: 'Valera', 
//        age: 92
//    },
//    {
//        name: 'Slava', 
//        age: 5
//    },
//    {
//        name: 'Misha', 
//        age: 2
//    },
//]
//const younger18 = [] 
//const older18 = [] 
//
//for(let i = 0; i < users.length; i++) {
//    if (users[i].age < 18) {
//        younger18.push(users[i]);
//    } else {
//        older18.push(users[i]);
//    }
//}
//
//console.log('Younger 18',younger18)
//console.log('Older 18',older18)

//Задание 17
//for (i = 0; i < 7; i++){
//    let var1 = ' '
//    for (j = 0; j < i; j++){
//        var1 = var1 + '#'
//    }
//    console.log(var1)
//}