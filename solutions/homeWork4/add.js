'use strict'

//Задание 18
//function getUpper() {
//    let text = 'Hellow, i try to study java script!'
//    var pull = text.split(" ")
//    var stringEnd = ""
//  
//    for (let i = 0; i < pull.length; i++) {
//      let name = pull[i]
//      let first = name.substring(0, 1).toUpperCase()
//      let initial = name.substring(1, name.length)
//      stringEnd += first + initial + " "
//    }
// 
//    console.log(stringEnd)
//  }
//  getUpper()

//Задание 19
//function calcNumbers (number) {
//    let sum = 0
//    for (let i = 1; i <= number; i++){
//        sum += i
//    }
//    return sum
//}
//console.log(calcNumbers(100))

//Задание 20
//var numbers = [10, 25, 100]
//function calcArray(object){
//    var sum = 0
//    for(var i = 0; i < object.length; i++) {
//    sum += object[i]
//    }
//    console.log(parseFloat(sum))
//}
//
//calcArray(numbers)

//Задание 21
//function getArea (length, width){
//    let area = length * width
//    return area
//}
//
//console.log(getArea (10, 20))

//Задание 22
//const user = {
//    name: 'Alex',
//    email: 'alexkarseko@gmail.com',
//    lovesFruit: 'Yes',
//    IQ: '20'
//}
//
//console.log(user.name + ', ' + user.email + ', ' + user.lovesFruit + ', ' + user.IQ)

//Задание 23
//const students = [
//    {
//        name: 'Вася',
//        scores: 80
//    },
//    {
//        name: 'Зина',
//        scores: 77
//    },    {
//        name: 'Катя',
//        scores: 88
//    },    {
//        name: 'Петя',
//        scores: 95
//    },    {
//        name: 'Вова',
//        scores: 57
//    }
//]
//for (let i = 0; i <= 5; i++){
//    if (students[i].scores >= 90){
//        console.log(`${students[i].name}` + ' - 5')
//    } else if (students[i].scores >= 80) {
//        console.log(`${students[i].name}` + ' - 4')
//    } else if (students[i].scores >= 70) {
//        console.log(`${students[i].name}` + ' - 3')
//    } else if (students[i].scores >= 60) {
//        console.log(`${students[i].name}` + ' - 2')
//    } else if (students[i].scores <= 60) {
//        console.log(`${students[i].name}` + ' - 1')
//    }
//}

//Задание 24
//function getAges(array) {
//    var newArray = []
//    for(var i = 0; i < array.length; i++){
//        newArray.push(array[i].age)
//    }
//    console.log(newArray)
//}
//getAges([
//    { name: 'Sergey', age: 33 },
//    { name: 'Daria', age: 25 },
//    { name: 'Nik', age: 18 }
//])

//Задание 25
//function getAges(array, key) {
//    var newArray =[]
//    for(var i = 0; i < array.length; i++){
//        if (key == 'name'){
//            newArray.push(array[i].name)
//        } else {
//            newArray.push(array[i].age)
//        }
//    }
//    console.log(newArray)
//}
//getAges(
//    [
//        { name: 'Sergey', age: 33 },
//        { name: 'Daria', age: 33 },
//    ],
//    'name'
//)
//getAges(
//    [
//        { name: 'Sergey', age: 33 },
//        { name: 'Daria', age: 33 },
//    ],
//    'age'
//)

//Задание 26
//var text = 'Hello world!'
//function transformText(text) {
//    var newText = ""
//    var length = text.length
//    for (var i = 0; i < length; i++) {
//        if (text[i] === text[i].toLowerCase()) {
//            newText += text[i].toUpperCase()
//        } else {
//            newText += text[i].toLowerCase()
//        }
//    }
//    return newText
//}
//console.log(transformText(text))

//Задание 27
//let number = 556
//function addColon (number) {
//    let transformStr = number.toString()
//    let result = [transformStr[0]]
//    for(var i = 1; i < transformStr.length; i++) {
//        if((transformStr [i-1] % 2 !== 0) && (transformStr[i] % 2 !== 0)) {
//            result.push(':', transformStr[i])
//        } else {
//            result.push(transformStr[i])
//        }
//    }
//    return result.join('')
//}
//console.log(addColon(number))

//Задание 28
//let text = 'Hellow JavaScript'
//function getTrue (condition, upper, lower) {
//    if (condition < 15){
//        console.log(upper)
//    } else {
//        console.log(lower)
//    }
//}
//let cond = 50
//function getUpper() {
//    return text.toUpperCase()
//}
//function getLower() {
//    return text.toLowerCase()
//}
//getTrue(cond, getUpper(), getLower())

//Задание 29
//function calcNumbers (number) {
//    let sum = 0
//    let string = '' + number
//    for (let i = 0; i < string.length; i++){
//        sum += +string[i]
//    }
//    return sum
//}
//console.log(calcNumbers(2021))

//Задание 30
// Это решение я подсмотрел, немного его переделал что бы понять как оно работает
//function getKebab (string) {
//    return string.split('').map((letter, idx) => {
//      return letter.toUpperCase() === letter
//       ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
//      : letter;
//    }).join('');
// }
// 
// console.log(getKebab('HelloJavaScript'));

//Задание 31
//function getShort(words) {
//    if (!words) { 
//        return '' 
//    }
//    function createFirstLetter (letter){
//        if (letter) {
//            return letter[0]
//        } else {
//            return ''
//        }
//    }
//    return words.split(' ').map(createFirstLetter).join('');
//}
//console.log(getShort("Республика Беларусь"))