"use strict";
// const arr = [
//   { x: 1, z: 2, y: 3 },
//   { x: 10, z: 21, y: 4 },
//   { x: 2, z: 3, y: 4 },
//   { a: 1, b: 2 },
// ];

// const calculate = (array) => {
//     const concatenatedObject = array.reduce((object, arrayItem) => {
//         const keys = Object.keys(arrayItem)
//         keys.forEach((key) => {
//             if(object[key]) {
//                 object[key] += arrayItem[key]
//             } else {
//                 object[key] = arrayItem[key]
//             }
//         })

//         return object
//     },{})
//     return concatenatedObject
// }

// console.log(calculate(arr))

// ' ' - НЕ ПУСТАЯ СТРОКА!!!

// let obj = {name: 1, years: 2}

// function someFunction(arr) {
//     const keys = Object.keys(arr)
//     return keys
// }

// console.log( someFunction(obj))

// ДЕСТРУКТУРИЗАЦИЯ

// const users = [
//   { name: "Denis", gender: "Male" },
//   { name: "Kristing", gender: "Female" },
//   { name: "Kristing", gender: "Female" },
//   { name: "Kristing", gender: "Female" },
//   { name: "Kristing", gender: "Female" },
//   { name: "Kristing", gender: "Female" },
//   { name: "Kristing", gender: "Female" },
// ];

// const getGendersArray = (arr) => {
//   const male = [];
//   const female = [];
//   const gendersArr = arr.reduce((result, el) => {
//     if (el.gender.toLowerCase() === "male") {
//       male.push(el);
//       result.push(male);
//     } else {
//       female.push(el);
//       result.push(female);
//     }

//     return result;
//   }, []);

//   return gendersArr;
// };

// const [j, k] = getGendersArray(users);

// Замыкание

// function getName() {
//   let name = "Ivan";
//   function bbb() {
//     console.log(name);
//   }

//   bbb();
// }

// getName();

// function bbb() {
//   console.log(name);
// }

// function getName(bbb) {
//   let name = "Ivan";

//   bbb();
// }

// getName(bbb);
// let name = "Denis";
// function getName() {
//     console.log(name);
// }
// getName();

// name = "Petya";
// getName();

// function bbb(name) {
//   console.log(name);
// }

// function getName(bbb) {
//   let name = "Ivan";
//   bbb(name);
// }

// getName(bbb);

// let name = "PEtr";

// (function() {
//     function getName() {
//         function bbb() {
//           console.log(name);
//         }
//         bbb();
//       }
// })()

// getName();

//КОЛЛБЭКИ
// function sayHi(name) {
//   console.log(name);
// }
// function getUserName(drygayaFunkciya) {
//   let name = "Denis";
//   drygayaFunkciya(name);
// }

// getUserName(sayHi)

// const arr = [1,2,3]
// function pow(number) {
//     return number*number
// }
// const result = arr.map(pow)

// console.log(result)

// function getUsername(someFunction, callback2) {
//     let name = 'Denis'
//     someFunction(name)
//     callback2()
// }

// getUsername(function(toChtoPrinyalaVGetUserName) {
//     console.log(toChtoPrinyalaVGetUserName)
// }, () => console.log('Чем дальше тем страшнее...'))

// КОНСТРУКТОРЫ
// function User(name, age) {
//     // this - НЕЯВНО!!!
//     this.name = name
//     this.age = age
//     // return this - НЕЯВНО!!!
// }

// const user1 = User('Denis', 28)
// console.log(user1)
// const names = ['Denis','Oleg']
// const ages = [28,128]
// const users = []
// names.forEach((e, i) => {
//     users.push(new User(e, ages[i]))
// })

// console.log(users)

// function User(name, age) {
//     // this - НЕЯВНО!!!
//     this.name = name
//     this.age = age
//     this.sayRage = function() {
//         console.log(`${this.name} Arrrrrrrrrrrrrrrrrrrrr!!!!!!!!`)
//     }
//     // return this - НЕЯВНО!!!
// }

// const user1 = new User('Denis', 28)
// const user2 = new User('Oleg', 128)
// user1.sayRage()
// user2.sayRage()
// console.log(user1)
// console.log(user2)

// РЕКУРСИЯ
// function pow(num, stepen) {
//   if (stepen === 1) {
//     return num;
//   } else {
//     return num * pow(num, stepen - 1);
    
//   }

// }

// console.log(pow(2,5))
