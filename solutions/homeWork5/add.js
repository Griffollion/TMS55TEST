'use strict'

//Задание 33
// const fruits = ['яблоко','груша','банан','апельсин','мандарин','яблоко','яблоко','банан','апельсин','апельсин']
// function calcSumFruits (arr) {
//     let collector = {}
//     for (let i = 0; i < arr.length; ++i) {
//         if (collector[arr[i]] != undefined) {
//             collector[arr[i]]++
//         } else {
//             collector[arr[i]] = 1
//         }
//     }
//         return collector
// }

// console.log (calcSumFruits(fruits))

//Задание 34
// const user = {
//     name: 'Alex',
//     age: 28,
//     country: 'Belarus'
//   };
//   function convertObject(obj) {
//     let user2 = {}
//     let propertie = Object.keys(obj)
//     propertie.forEach(function(value) {
//       let key = obj[value]
//       user2[key] = value 
//     })                   
//     return user2
//   };
  
//   console.log(convertObject(user))