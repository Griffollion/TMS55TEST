'use strict'



//Задание 1 

// let a = 1
// let b = 2
// let c = ' белых медведей'
// let result = a + (b + c)


// console.log(result)



//Задание 2 

// const a = 10
// const b = 2
// const c = 5
// let result = a + b + c


// console.log(result)



//Задание 3

// let num = 10
// num = num++
// num = num++
// num = num--
// alert(num)



//Задание 4

// const num1 = 1
// const num2 = 017
// const num3 = 354
// const num4 = 283
// const num5 = 498

// if (num1 > num2) {
//     if(num1 > num3) {
//         if (num1 > num4) {
//             if (num1 > num5) {
//                 console.log(num1)
//             } else {
//                 console.log(num5)
//             }
//         } else {
//             if (num4 > num5) {
//                 console.log(num4)
//             } else {
//                 console.log(num5)
//             }
//         }
//     } else {
//         if (num3 > num4) {
//             if (num3 > num5) {
//                 console.log(num3)
//             } else {
//                 console.log(num5)
//             }
//         } else {
//             if (num4 > num5) {
//                 console.log(num4)
//             } else {
//                 console.log(num5)
//             }
//         }
//     }
// } else {
//     if (num2 > num3) {
//         if (num2 > num4) {
//             if (num2 > num5) {
//                 console.log(num2)
//             } else {
//                 console.log(num5)
//             }
//         } else {
//             if (num4 > num5) {
//                 console.log(num4)
//             } else {
//                 console.log(num5)
//             }
//         }
//     } else {
//         if (num3 > num4) {
//             if (num3 > num5) {
//                 console.log(num3)
//             } else {
//                 console.log(num5)
//             }
//         } else {
//             if (num4 > num5) {
//                 console.log(num4)
//             } else {
//                 console.log(num5)
//             }
//         }
//     }
// }



//Задание 5

// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'кг'

// console.log(a6, a7, a8, a9, a10)



//Задание 6

// const n1 = 2
// const n2 = 4

// if (n1 < n2) {
//     alert(n1)
// } else {
//     alert(n2)
// }



//Задание 7

// for (let i = 0; i < 16; i++){
//     if (i % 2 == 0) {
//         console.log(i, ' - четное число')
//     } else {
//         console.log(i, ' - нечетное число')
//     }
// }



//Задание 8

// for (let i = 0; i < 101; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 == 0) {
//         console.log('Fizz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     }
// }



//Задание 9

// Попытка 1

// let sum3 = 0
// let sum4 = 0

// for (let i = 0; i < 1001; i++) {
//     if (i % 4 == 0) {
//         sum4 = sum4 + i
//     } 
//     if (i % 3 == 0) {
//         sum3 = sum3 + i
//     }
// }
// console.log(sum4)
// console.log(sum3)



// Попытка 2

// let sum3 = 0
// let sum4 = 0

// for (let i = 0; i < 1001; i++){
//     if (i % 4 == 0) {
//         sum4 += i
//     }
//     if (i % 3 == 0) {
//         sum3 += i
//     }
// }
// console.log(sum4)
// console.log(sum3)



//Задание 10

// const a1 = -5
// const a2 = 8
// const a3 = 2

// if (a1 < 0 && a2 < 0 && a3 < 0) {
//     alert ('Знаки чисел a1, a2, a3: -, -, -')
// } else if (a1 < 0 && a2 < 0 && a3 > 0) {
//     alert ('Знаки чисел a1, a2, a3: -, -, ')
// } else if (a1 < 0 && a2 > 0 && a3 < 0) {
//     alert ('Знаки чисел a1, a2, a3: -, , -')
// } else if (a1 > 0 && a2 < 0 && a3 < 0) {
//     alert ('Знаки чисел a1, a2, a3: , -, -')
// } else if (a1 < 0 && a2 > 0 && a3 > 0) {
//     alert ('Знаки чисел a1, a2, a3: -, , ')
// } else if (a1 > 0 && a2 > 0 && a3 > 0) {
//     alert ('Знаки чисел a1, a2, a3: , , ')
// }



//Задание 11

// let str = 'Привет'
// let num = 123
// let flag = true
// let text = 'true'

// console.log(typeof str, typeof num, typeof flag, typeof text)

//Задание 12

// let a1 = (5 + 3) * (5 - 3)
// let a2 = (10 - 6) * 200
// let a3 = (534 * 132) / 18
// let a4 = 123 * 3 + 10
// let a5 = 12 * 13 * 14

// console.log(a1, a2, a3, a4, a5)

//Задание 13

// let numb = prompt ('Введите любое целое число')

// if (numb % 2 == 0) {
//     alert ('Это четное число')
// } else {
//     alert ('Это не четное число')
// }



//Задание 14

// let credit = 1000
// let rate = 10
// let age = 5

// let overpayment = credit / age / 100 * rate * age

// console.log(overpayment)



//Задание 15

// let product = {
//     name: 'Автобус МАЗ 203',
//     price: '12 828 000 BYN',
//     type: 'Technical',
//     releaseData: '23.05.2021',
//     manufacturer: 'МАЗ',
//     country: 'Belarus',
//     isGaranty: true
// }

// console.log('Name: ', product.name)
// console.log('Price: ', product.price)
// console.log('Type: ', product.type)
// console.log('Release data: ', product.releaseData)
// console.log('Manufacturer: ', product.manufacturer)
// console.log('Country: ', product.country)
// console.log('Is it garanty: ', product.isGaranty)



//Задание 16




//Задание 17










































