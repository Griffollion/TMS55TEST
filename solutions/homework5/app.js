'use strict'
//Задание 33

function countFruit() {
  let fruits = [
    'banan',
    'orange',
    'apple',
    'orange',
    'lemon',
    'apple',
    'orange',
    'lemon',
  ]
  let countedFruit = {}
  for (let i = 0; i < fruits.length; i++) {
    let a = fruits[i]
    if (countedFruit[a] != undefined) {
      ++countedFruit[a]
    } else {
      countedFruit[a] = 1
    }
  }
  return countedFruit
}
let rezultFruit = countFruit()
console.log(rezultFruit)

// Задание 34

//let reverseObject = {}
function convertObject() {
  let object = {
    a: 'b',
    c: 'd',
    e: 'f',
  }
  let reverseObject = {}
  let keys = Object.keys(object)
  let value = Object.values(object)
  for (let i = 0; i < keys.length; i++) {
    reverseObject[value[i]] = keys[i]
  }
  return reverseObject
}
let rezultObject = convertObject() // => { b: 'a', d: 'c' }
console.log(rezultObject)
