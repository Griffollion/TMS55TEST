'use strict'
//                                 13*
// let num = prompt('Введите любое число', '')
// if (num % 2 == 0) {
//     alert ('Четное число');
// } else {
//     alert ('Нечетное число');
// }

//                                   18*

// let string = 'The road to hell is paved with good intentions'
// console.log(
// string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
// )

//                    19*

// function getSum(n) {
// let sum = 0
// for (let i = 1; i <= n; i++) {
// sum += i
// }
// return sum
// }
// console.log(getSum(100))


//                        20*

// const sum = [10, 25, 100].reduce(add, 0);
// function add(accumulator, a) {
//     return accumulator + a;
// }
// console.log(sum)

//                          21*

// const calculateTriangleArea = (x, y) => x * y 
// console.log(calculateTriangleArea(8, 5))

//                      22*

// const userShop = {

// name: 'Alexey',
// email: 'iternet-shop.@mail.ru',
// doYouLikeFruit: 'like',
// IQ:100} 

// console.log(userShop.name)
// console.log(userShop.email)
// console.log(userShop.doYouLikeFruit)
// console.log(userShop.IQ)

//                      24*

// function getAge(array) {
//    var newArray = []
//    for(var i = 0; i < array.length; i++){
//        newArray.push(array[i].age)
//    }
//    console.log(newArray)
// }
// getAge([
//    { name: 'Sergey', age: 33 },
//    { name: 'Daria', age: 33 },
//    { name: 'Nik', age: 18 }
// ])



//                           29*

// function getSumNumb(num) {
//     let sum = 0, tmp
//     while (num) {
//         tmp = num % 10
//         num = (num - tmp) / 10
//         sum += tmp
//     }
//     return sum
// }
// console.log(getSumNumb(2021))

//               35*

// let num = [1, 2, 3]
// let numReverse = num.reverse()

// console.log(numReverse)

//               36*

// const sum = [10, 25, 100, 77, 19, 20, 1, 5, 47, 6].reduce(add,0);
// function add(accumulator, a) {
//   return accumulator + a;
// }

// console.log(sum);


//     39*

// const users = [
//   { name: "Denis", gender: 'man' },
//   { name: "Maria", gender: 'woman' },
//   { name: "Ivan", gender: 'man'},
//   { name: "Vasilisa", gender: 'woman' },
// ];

// const gender = ['men', 'woman']

// const objOfGender = gender.reduce((bag, gen) => {
//    bag[gen] = (bag[gen] || 0) + 1
//    return bag
// }, {})

// console.log(objOfGender)

