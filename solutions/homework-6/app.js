'use strict'

// задание 35

console.log('Решение задания 35:')

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const getReversedArray = (arr) => {
    const newArray = arr.reverse()
    return newArray
}

let reverseArray = getReversedArray(array)

console.log(reverseArray)


// задание 36

console.log('Решение задания 36:')

const getSumArray = (arr) => {
    const sumArr = arr.reduce((sum,el) => sum + el, 0)
    return sumArr
}
const sumArray = getSumArray(array)

console.log(sumArray)

// задание 37

console.log('Решение задания 37:')

const user = {
    name: 'Вова',
    age: 20,
    fruit: 'orange',
    hight: 180,
    car: 'Opel',
}

const convertObject = (obj) => {
        let newObject = {}
        Object.values(obj).forEach((key,i) => newObject[key] = Object.keys(obj)[i])
        return newObject 
}
        
const converterObject = convertObject(user)
console.log(converterObject)
 
// задание 38

// console.log('Решение задания 38:')  

// const arrayObj = [
//     {x: 7, y: 6, z: 5},
//     {x: 1, y: 0, z: 9},
//     {x: 17, y: 3, z: 9},
//     {x: 7, a: 7, b: 5},
//     {c: 7, y: 6, a: 5},
// ]

// function calculate(array){
// //     const sumKeys = array.reduce((sumKey, el) => {
// //                 
// // return sumKey
// // },
// //      {})
// //  }

// console.log(calculate(arrayObj))

// задание 39

console.log('Решение задания 39:')

const dataGender = [
    {name: 'Vanja', sex: 'male'},
    {name: 'Olga', sex: 'female'},
    {name: 'Serhej', sex: 'male'},
    {name: 'Tatjana', sex: 'female'},
    {name: 'Boris', sex: 'male'},
]

function splitIntoGender (data) {
    let maleArr = data.filter((el) => el.sex == 'male')
    console.log(maleArr)
    
    let femaleArr = data.filter((el) => el.sex == 'female')
    console.log(femaleArr)
}
splitIntoGender(dataGender)