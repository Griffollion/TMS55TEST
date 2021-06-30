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
    } else {
       continue
    }
}
}
console.log(dataFruits)
}

makeDataFruits()

console.log ('Решение задания 34:')

