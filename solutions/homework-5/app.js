'use strict'
// задание 33

console.log ('Решение задания 33:')

let fruits = ['apple','banana','apple','lemon','banana','cherry','orange','orange','cherry','apple','peach']
let makeDataFruits = () => {
    let dataFruits = {}
    let copyFruits = fruits.slice()
   for (let i = 0; i < copyFruits.length; i++){
    dataFruits[copyFruits[i]] = 1
    for (let j = i+1; j < copyFruits.length; j++){
    if (copyFruits[i] === copyFruits[j]){
        ++dataFruits[copyFruits[i]]
        copyFruits.splice(j,1)
    } 
}
}
console.log(dataFruits)
}

makeDataFruits()

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
    console.log(convertObj)
}
convertorObject(object)



