"use strict";

// let numbers = [1,2]

// numbers[100] = 10

// console.log(numbers)

// const arr = [1,'Водичка', {name: 'Dell'}, undefined, [1,2,3,4]]

// const arr1 = [1,'Водичка', {name: 'Dell'}, undefined, [1,2,3,4]]
// const arr2 = arr1
// const arr3 =  [...arr1]

// const names = []
// names.push('Denis')
// console.log(names)
// names.push('Elvira', 'Snezanna', 'Boris')
// console.log(names)
// const lastName = names.pop()
// console.log('Последний элемент массива был:', lastName)
// console.log('Измененный массив', names)

//const messages = ["Помой посуду", "Приготовь еду", "Выгуляй собаку"];
// while(messages.length) {
//     console.log(messages.shift())
// }
// document.addEventListener("click", () => {
//   if (messages.length != 0) {
//     console.log(messages.shift());
//   }
// });

// const numbers = [1,2,3,4,5]

// for(let number of numbers) {
//     console.log(number)
// }

// MAP
// const users = [
//   { name: "Denis", age: 28 },
//   { name: "Petya", age: 128 },
//   { name: "Ivan", age: 32 },
// ];

// const users2 = [
//     { name: "Igor", age: 28 },
//     { name: "Vika", age: 128 },
//     { name: "Ivan", age: 32 },
//   ];

// const userNames = users.map(function(user) {
//     return user.name
// })
// const someFunction = (element) => {
//     return element.name
// }
// const userNames = users.map(someFunction)
// const userNames = users.map(user => user.name)
// console.log(userNames);

// const getUsersName = (samayaLutchaPeremennayaVmireIEtoMassiv) => {
//   const userName = samayaLutchaPeremennayaVmireIEtoMassiv.map(
//     user => user.name
//   );

//   return userName
// };

// const groupA = getUsersName(users)
// const groupB = getUsersName(users2)
// console.log(groupA);
// console.log(groupB);

// const numbers = [1,2,3]

// const result = numbers.map(function(el,index,arr){
//     return (el / arr.length) * index
// })

// console.log(result)

// FILTER
// const users = [
//   { name: "Denis", age: 28 },
//   { name: "Petya", age: 128 },
//   { name: "Ivan", age: 12 },
//   { name: "Vasilisa", age: 2 },
// ];

// // const minor = users.filter(function(el) {
// //     return el.age < 18
// // })

// // const minor = users.filter(el => el.age < 18)

// const getMinorUsers = (arr) => {
//     const minorUsers = arr.filter(function(el) {
//         return el.age < 18
//     })

//     return minorUsers
// }

// const minor = getMinorUsers(users)

// console.log(minor)

// forEach
// const arr = [1,2,3]
// arr.forEach((el) => console.log(el))
// const divs = document.querySelectorAll('div')
// console.log(divs)
// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         div.innerText = 'Kavabunga'
//     })
// })

//REDUCE

// const numbers = [1,2,3]
// const sum = numbers.reduce(function(total,item){
//     return total+item
// },0)

// const sum = numbers.reduce((total,item) => total+item,0)
// console.log(sum)

// const fruits = ['lemon', 'apple', 'apple', 'banan']

// const objOfFruits = fruits.reduce((bag, fruit) => {
//    bag[fruit] = (bag[fruit] || 0) + 1
//    return bag
// }, {})

// console.log()

// SPREAD

// const arr1 = [1,2]
// const arr2 = [2,3]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// SLICE
// const posts = [1, 2, 3, 4, 5];
// let postsCount = 0;

// function getLimitPosts(posts, existingPosts, limit) {
//   const limitPosts = posts.slice(existingPosts, limit + existingPosts);
//   postsCount += limit;
//   return limitPosts;
// }

// document.addEventListener("click", () => {
//   if (postsCount < posts.length) {
//     console.log(getLimitPosts(posts, postsCount, 2));
//   }
// });

// JOIN
// const names = ['Dima', {name: 'Denis'}, 'Petya']
// const stringOfNames = names.join('---')
// console.log(stringOfNames)

// const users = [
//   { name: "Denis", age: 28 },
//   { name: "Petya", age: 128 },
//   { name: "Ivan", age: 12 },
//   { name: "Vasilisa", age: 2 },
// ];

// const stringOfNames = users.filter(el => el.age > 18).map(el => el.name).join(', ')
// console.log(stringOfNames)

//CONCAT
// const arr1 = [1]
// const arr2 = [2]
// const arr3 = arr1.concat(arr2,arr2,arr2 )

// console.log(arr3)

// SOME
// const ids = [1,2,3]
// const isIdExistids = ids.some(el => el === 12)
// console.log(isIdExistids)

// SORT

// const names = ["Denis", "Andrey"];
// console.log(names.sort());

// const names = [1, 2, 1000, 17];
// console.log(names.sort());

// const names = [1, 2, 1000, 17];
// console.log(
//   names.sort(function (a, b) {
//     return a - b;
//   })
// );

// console.log(names.sort((a,b) => a-b));
