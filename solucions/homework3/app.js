// Задание 1 
// let a = 1
// let b = 2
// let c = " белых медведей"
// let d = a +""+ b + c 
// console.log(d)

// // Задание 2
// a=10
// b=2
// c=5
// d=a+b+c
// console.log(d)

// // Задание 3
// let num = 10
// num = ++num 
// num = ++num 
// num = --num 
// alert(num)

// // Задание 4
// let arr=[2, 3, 25, 23, 23]
// let max= Math.max.apply(Math, arr)
// console.log(max)

// // Задание 5
// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + "3"
// let a9 = "5" - 3 
// let a10 = 75 + 'кг'

// console.log(a6)
// console.log(a7)
// console.log(a8)
// console.log(a9)
// console.log(a10)
// // Задание 6
// let arr2=[-10, -5]
// let min= Math.min.apply(Math, arr2)
// console.log(min)
// // Задание 7
// for(let i=0; i < 15; i++){
//     if (i % 2 == 0){
//         console.log(i,"Это четное")
//     }
//     else {
//         console.log(i,"Это нечетное")
//     }
// }
// // Задание 8
// for(let i=1; i < 100; i++){
//     if (i % 3 == 0 && i % 5 ==0){
//         console.log(i,"FizzBuzz")
//     }
//     else if (i % 3 == 0){
//         console.log(i,"Fizz")
//     }
//     else if(i % 5 ==0) {
//         console.log(i,"Buzz")
//     }
// }
// // Задание 9
// let multiplesOf4 = []
// let multiplesOf3 = []
// let sumMul4 = 0
// let sumMul3 = 0

// for(let i=0; i<1000; i++){
//     if ( i % 4 == 0 ){
//         multiplesOf4.push(i)
//     }
// }
// for(let i=0; i<1000; i++){
//          if ( i % 3 == 0 ){
//         multiplesOf3.push(i)
//     }
// }

// for (let i =0; i<multiplesOf4.length;i++){
//     sumMul4 += multiplesOf4[i];
// }
// console.log(sumMul4)

// for (let i =0; i<multiplesOf3.length;i++){
//     sumMul3 += multiplesOf3[i];
// }
// console.log(sumMul3)

// // Задание 10
// let a1=10
// let a2=-6
// let a3=3
// let simbolA1 = (a1>0) ? " " : "-";
// let simbolA2 = (a2>0) ? " " : "-";
// let simbolA3 = (a3>0) ? " " : "-";
// alert("Знаки чисел a1, a2, a3:" + simbolA1 +","+ simbolA2 +","+ simbolA3)
// // Задание 11
// let str= "Привет"
// let num= 123
// let flag= true
// let txt= "true"
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof txt)
// // Задание 12
// let a1 =(5 + 3) * (5 - 3)
// let a2 =(10 - 6) * 200
// let a3 = (534 * 132) / 18
// let a4 = 123 * 3 + 10
// let a5 =12 * 13 * 14
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// // Задание 13
// let number = prompt("Введите любое целое число :", )
//     if (number % 2 == 0){
//         alert("Это четное число")
//     }
//     else {
//         alert("Это нечетное число")
//     }

// // Задание 14
// let credit = 1000
// let procent = 0.10
// let years = 5
// let lastSum= credit*(procent+(procent/(1+procent)*years))
// console.log(lastSum)
// // ЗНАЮ ЧТО НЕ ПРАВИЛЬНО - ВООБЩЕ НЕ ДОШЕЛ ДО ФОРМУЛЫ - но вдруг ))))

// // Задание 15
// let product = {
//     name : 'JSO',
//     price : 100,
//     type : 'programm',
//     releaseDate : 1993,
//     manufacturer : 'VAG GROUP',
//     country : 'USSR',
//     isGaranty : true
// }
// console.log(product.name)
// console.log(product.price)
// console.log(product.type)
// console.log(product.releaseDate)
// console.log(product.manufacturer)
// console.log(product.country)
// console.log(product.isGaranty)
// Задание 16

// // Задание 17
// for(let i = 0 ; i < 10 ; i++){
//         let line = '#'
//         for(let j = 0; j < i; j++) {
//           line += '#'
//         }
//         console.log(line)
// }