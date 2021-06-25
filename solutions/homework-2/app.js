'use strict'
// var userName = 'Дмитрий'
// const userSurname = 'Косенко'
// let userAge = 45
// let userWeight
// let userPassword = null
// let userFavThings = {
//     fruit: 'cherry',
//     color: 'blue',
//     weather: 'spring',
// }
// let userFamily = ['Юля', 'Егор', 'Антон',]
// let bigNumber = 99999999999999999999999999n

// console.log(`Меня зовут: ${userName + ' ' + userSurname}, тип ${typeof userName}`)
// console.log(`Мой возраст: ${userAge}, тип ${typeof userAge}`)
// console.log(`Мой вес: ${userWeight}, тип ${typeof userWeight}`)
// console.log(`Пароль моего счета: ${userPassword}, тип ${typeof userPassword}`)
// console.log(`Любимые вещи: ${userFavThings.fruit}, ${userFavThings.color}, ${userFavThings.weather}, тип ${typeof userFavThings}`)
// console.log(`Моя семья: ${userFamily[0]}, ${userFamily[1]}, ${userFamily[2]}, тип ${typeof userFamily}`)
// console.log(`Сумма счета в банке: ${bigNumber}, тип ${typeof bigNumber}`)
// let value = bigNumber < 0
// console.log(value)
// console.log(typeof value)
// let summa = 4
// console.log(summa == 2+2)
// console.log(typeof (summa == 4+4))

// function getAverage(number1 = 1, number2 = 1) {
//     if(typeof(number1) != 'number' || typeof(number2) != 'number'){
// return 'вы ввели некорректоное значение'
// }

// let result = (+number1 + +number2) /2
// return result
// }

// let userNumber1 
// let userNumber2 = 8

// console.log(getAverage(userNumber1,userNumber2))

const isPolindrom = (str) => {
    let defaultStr = str.toLowerCase()
    let reverseStr = defaultStr.split('').reverse().join('')

    if(defaultStr === reverseStr){
        console.log(`${str} - это полиндром`)
    } else {
    console.log(`${str} - это не полиндром`) }
   
}

isPolindrom('уууруууе')