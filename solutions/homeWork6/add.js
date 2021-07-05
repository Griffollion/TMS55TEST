'use strict'

//Задание 35
//const numbers = [1,2,3]
//numbers.reverse()
//
//console.log(numbers)

// Задание 36
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// function calcSumNumbers (a, ...rest){
//    return a + rest.reduce((a, i) => a + i, 0)
// }

// console.log(calcSumNumbers(...numbers))

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
//     { x: 1, z: 2, y: 3 },
//     { x: 10, z: 21, y: 4 },
//     { x: 2, z: 3, y: 4 },
//     { a: 1, b: 2 },
// ]

// let x = arr.reduce((sum, current) => sum + (current.x || 0), 0)
// let z = arr.reduce((sum, current) => sum + (current.z || 0), 0)
// let y = arr.reduce((sum, current) => sum + (current.y || 0), 0)
// let a = arr.reduce((sum, current) => sum + (current.a || 0), 0)
// let b = arr.reduce((sum, current) => sum + (current.b || 0), 0)
// let result = {x, z, y, a, b}

// console.log(result)

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
/* У меня небольшой вопрос, я создавал переменную для отфильтровки ненужных значений, мой код выглядел так
const elements = [1, 3, false, ' ', 0, null, undefined, 'Alex'] 
const unwantedEle = [false, ' ', 0, null, undefined]
const stripping = elements.filter((value) => {
   return value != unwantedEle
})
console.log (stripping)
Но оно не сработало, где тут ошибка? Если можно подскажи) */


// const elements = [1, 3, false, ' ', 0, null, undefined, 'Alex'] 
// const stripping = elements.filter((value) => {
//     return value != false && value != ' ' && value != 0 && value != null && value != undefined
// })

// console.log (stripping)

//Задание 41
// const numbers = [1,2,3,4,5]
// while (numbers.length) {
//     console.log(numbers.splice(0, 2))
// }