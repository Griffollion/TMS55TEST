'use strict'

// задание 15
let productData = {
    name: 'Apple iPhone 11',
    price: 1730,
    type: 'smartphone',
    releaseDate: 2019,
    manufacturer: 'Apple',
    country: 'USA',
    isGaranty: true
}
console.log (`Решение задачи 15:`)
console.log(` ${productData.name}\n price ${productData.price}р.\n type: ${productData.type}\n release date: ${productData.releaseDate}\n manufacturer ${productData.manufacturer}, ${productData.country}\n garanty: ${productData.isGaranty}`)
console.log()
// задание 16

let usersData = [
    {
       name: 'Ivan',
       age: 18
    },
    {
        name: 'Petr',
        age: 12
    },
    {
        name: 'Sidor',
        age: 25
    },
    {
        name: 'Dima',
        age: 5
    },
    {
        name: 'Katja',
        age: 30
    }
]

let adults = []
let minors = []

for (let i = 0; i < usersData.length; i++){
    if (usersData[i].age < 18) {
        minors.push(usersData[i].name);
    } else{
        adults.push(usersData[i].name);
    }
}

console.log (`Решение задачи 16:\n совершеннолетние: ${adults}, несовершеннолетние: ${minors}`)
console.log()
// задание 17
 
console.log (`Решение задачи 17:`)
let symbol = ''
for (let i=0; i < 10; i++){    
    for(let j = 0; j < i; j++){
        symbol += '#'
    }
    symbol += '\n'
}
console.log(symbol)

// задание 18
console.log (`Решение задачи 18:`)

function getCapitalizedString (text){
    if (typeof(text) != 'string'){
        return console.log ('Введите текстовое значение')
    } else {
    let newStringArray = text.split(' ')
    for (let i = 0; i < newStringArray.length; i++){
        newStringArray[i] = newStringArray[i].slice(0,1).toUpperCase() + newStringArray[i].slice(1)
    }
    let newString = newStringArray.join(' ') 
    console.log(newString)
    } 
}
getCapitalizedString('Разбивает объект String на массив строк, разделённых указанной строкой на подстроки.')

// задание 19
console.log (`Решение задачи 19:`)

function  getSum(parametr){
    let sum = 0
   for (let i = 0; i <= parametr; i++ ){
     sum += i
 }
 console.log(sum)
 }
 getSum(100)


//  задание 20
console.log (`Решение задачи 20:`)

var numbers = [2,20,43,'', 'i', true, 15]
const getArraySum = () => {
    let sumArray = 0
    for (let i = 0; i < numbers.length; i++){
        if (typeof(numbers[i]) != 'number') {
            continue
        } else{
            sumArray += numbers[i]
        }
    }
    console.log(sumArray)
}
getArraySum()

// задание 21
console.log (`Решение задачи 21:`)

const getSquare = (width,hight) => {
    return  width * hight
}
console.log(`Площадь прямоугольника со сторонами 13 и 10 см равна: ${getSquare(13,10)} см2`)

// задание 22
console.log (`Решение задачи 22:`)

let userData = {
    name: 'Сергей',
    email: 'serhej@mail.ru',
    isLikeFruits: true,
    indikatorIQ: 120
}
console.log(`Данные пользователя:\n Имя: ${userData.name}\n Email: ${userData.email}\n любит фрукты: ${userData.isLikeFruits}\n показатель IQ: ${userData.indikatorIQ}`)

// задание 23
console.log (`Решение задачи 23:`)

let listStudents = [
{
    name:'Вася',
    resultTest: 80,
},
{
    name:'Зина',
    resultTest: 77,
},
{
    name:'Катя',
    resultTest: 88,
},
{
    name:'Петя',
    resultTest: 95,
},
{
    name:'Вова',
    resultTest: 57,
}
]
for (let i = 0; i < listStudents.length; i++) {
    if (listStudents[i].resultTest < 70) {
        console.log(`Оценка ${listStudents[i].name} - 2`)
    } if  (listStudents[i].resultTest >= 70 && listStudents[i].resultTest < 80) {
        console.log(`Оценка ${listStudents[i].name} - 3`)
    } if  (listStudents[i].resultTest >= 80 && listStudents[i].resultTest < 90) {
        console.log(`Оценка ${listStudents[i].name} - 4`)
    } if  (listStudents[i].resultTest >= 90 && listStudents[i].resultTest <= 100) {
        console.log(`Оценка ${listStudents[i].name} - 5`)
    }
}
// задание 24
console.log (`Решение задачи 24:`)

function getAges(array){
    let age = []
    for (let i = 0; i < array.length; i++){
    age.push(array[i].age)
    }
    console.log(age)
}

getAges([
    { name: 'Sergey', age: 33 },
    { name: 'Daria', age: 24 },
    { name: 'Dima', age: 54 },
    { name: 'Oleg', age: 20 }
])


// задание 25
console.log (`Решение задачи 25:`)

function getData(array,key){
    let data = []
    for (let i = 0; i < array.length; i++){
    data.push(array[i][key])
    }
    if (key === 'name' || key === 'age') {
        console.log(data)
    } else console.log('Введите корректное значение ключевого слова: name или age')
}

getData([
    { name: 'Sergey', age: 33 },
    { name: 'Daria', age: 24 },
    { name: 'Dima', age: 54 },
    { name: 'Oleg', age: 20 }
], 
'name')

// задание 26
console.log (`Решение задачи 26:`)

const getString = (text) => {
    let newString = ''
    for (let i = 0; i < text.length; i++){
        if (text[i] === text[i].toUpperCase()){
        newString += text[i].toLowerCase()
        } else {
            newString += text[i].toUpperCase()
        }
    }
    console.log(newString)
}
getString('ВозвраЩает сиМволы В Строке междУ двуМя инДексАми.')

// задание 27
console.log (`Решение задачи 27:`)

const addSymbol = (number) => {
    let newNumber = ''
    let strNumber = String(number)
    for (let i = 0; i < strNumber.length; i++){
         if (strNumber[i] % 2 === 0){
            newNumber += strNumber[i]
        } else if (typeof(strNumber[i+1]) == 'undefined' || strNumber[i+1] % 2 === 0) {
            newNumber += strNumber[i]
        } else newNumber = newNumber + strNumber[i] + ':'
    }
    console.log(newNumber)
}
addSymbol(445567789989)

// задание 28
console.log (`Решение задачи 28:`)

function getAnswer (ask, showMessageYes, showMessageNo) {
    let result = confirm(ask)
    result ? showMessageYes(): showMessageNo()
}

let showYes = () => {
    alert('Отлично, мы рады предложить вам хорошие условия :)')
}
let showNo = () => {
    alert('Жаль, что вы не хотете стать клиентом нашего бака (:')
}
getAnswer('Вы хотите оформить кредит в нашем банке?', showYes, showNo)

// задание 29
console.log (`Решение задачи 29:`)
let calcDigit = (number = 2021) => {
    number = String(number)
    let sumNumber = 0
    for (let i = 0; i < number.length; i++){
       sumNumber += +number[i]
    }
    return (sumNumber)
}
console.log(calcDigit())

// задание 30
console.log (`Решение задачи 30:`)

let getKebabCase = (text) => {
    text = text.toLowerCase().split(' ').join('-')
    console.log(text)
}

getKebabCase('Возвращает итератор по всем Рзультатам при Сопоставлении строки с регУлярным выражением.')

// задание 31
console.log (`Решение задачи 31:`)

let getAbbreviation = (text) => {
    let newText = ''
    let arrayText = text.toUpperCase().split(' ')
    for (let i = 0; i < arrayText.length; i++){
        newText += arrayText[i].slice(0,1)
    }
    console.log(newText)
}
getAbbreviation('Определяет, начинается ли строка символами другой строки.')