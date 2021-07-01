'use strict'
// задание 33

console.log ('Решение задания 33:')

let fruits = ['apple','banana','apple','lemon','banana','cherry','orange','orange','cherry','apple','peach']
let makeDataFruits = () => {
    let dataFruits = {}
    for (let i = 0; i < fruits.length; i++){
    dataFruits[fruits[i]] = 1
    for (let j = i+1; j < fruits.length; j++){
    if (fruits[i] === fruits[j]){
        ++dataFruits[fruits[i]]
        fruits.splice(j,1)
    } 
}
}
return dataFruits
}

let copyFruits = makeDataFruits(fruits)
console.log(copyFruits)

// задание 34

console.log ('Решение задания 34:')

let object = {
    color: 'red',
    mame: 'Serhej',
    age: 24,
    car: true,
    married: false,
}

function convertorObject(obj){
    let convertObj = {}
    for (let key in obj){
       convertObj[obj[key]] = key
    }
    return convertObj
}
let convertObj = convertorObject(object)

console.log(convertObj)

