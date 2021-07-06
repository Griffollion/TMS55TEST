'use strict'



//   Задание 35

// const numbers = [1, 2, 4, 6, 8]

// numbers.reverse()

// console.log(numbers)



//   Задание 36

// const numbers = [1, 2, 3, 4, 5, 6, 236, 26, 156, 82, 437, 2367, 848, 15, 2364, 23637, 237, 169, 9387, 715]

// function sumArray(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     console.log(sum)
// }

// sumArray(numbers)



// // // // // // // // Другим методом

// let sumNumbersInArray = numbers.reduce ((sum, element) => sum + element)

// console.log(sumNumbersInArray)



//   Задание 37

// const someObject = { a: 'b', c: 'd' }

// function convertObject(obj) {
//     const newObj = {}
//     Object.keys(obj).forEach(function (value) {
//       let key = obj[value]
//       newObj[key] = value
//     })
//     return newObj
// }

// console.log(convertObject(someObject))



//   Задание 38

const numbersToCalculate = [ 
    {x: 1, z: 2, y: 3},
    {x: 10, z: 21, y: 4},
    {x: 2, z: 3, y: 4},
    {a: 1, b: 2}
]

function calculate (array) {
    const newObj = {}
    Object.entries(array).forEach(([key, value]) => [key, value += value])
    console.log ()
    return array
}
calculate(numbersToCalculate)

console.log(calculate(numbersToCalculate))



//   Задание 39















