'use strict'

//Задание 35
//const numbers = [1,2,3]
//numbers.reverse()
//
//console.log(numbers)

// Задание 36
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const calcSumNumbers = numbers.reduce((a, i) => a + i, 0)
// console.log(calcSumNumbers)

//Задание 37
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

//Задание 38
// const arr = [
// { x: 1, z: 2, y: 3 },
// { x: 10, z: 21, y: 4 },
// { x: 2, z: 3, y: 4 },
// { a: 1, b: 2 },
// ]

// const summationObjectsProperties = (arr) => {
// const result = arr.reduce((accumulator, item) => {
// const keys = Object.keys(item)
// keys.forEach(el => {
// if(accumulator[el]) {
// accumulator[el] += item[el]
// } else {
// accumulator[el] = item[el]
// }
// })
// return accumulator
// }, {})

// return result
// }

// console.log(summationObjectsProperties(arr))

//Задание 39
// const users = [
//     {name: 'Petyn', gender: 'male'},
//     {name: 'Olga', gender: 'female'},
//     {name: 'Anna', gender: 'female'},
//     {name: 'Igar', gender: 'male'},
//     {name: 'Vasyn', gender: 'male'},
// ]

// let female = users.reduce((sum, value) => {
//     if (value.gender == 'female'){
//        sum.push(value)
//     }
//     return sum
// },[])
// let male = users.reduce((sum, value) => {
//     if (value.gender == 'male'){
//        sum.push(value)
//     }
//     return sum
// },[])

// console.log(female)
// console.log(male)

//Задание 40
// const elements = [1, 3, false, '', 0, null, undefined, 'Alex'] 
// const stripping = elements.filter(el => el)

// console.log (stripping)

//Задание 41
// const numbers = [1,2,3,4,5]
// const separator = []
// while (numbers.length) {
//    separator.push(numbers.splice(0, 2))
// }

// console.log(separator)