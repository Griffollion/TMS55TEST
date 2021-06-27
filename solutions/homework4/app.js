'use strict'
// Задание 18
// Дана строка. 
// Сделайте заглавным первый символ каждого слова этой строки.

let str = 'Каждый охоТник желАет зНать гдЕ сИдит фАзАн';
function getWordUppercase (str) {
    str = str[0].toUpperCase() + str.slice(1);
        for (let i = 0; i <= str.length; i++) {
            if (str[i] == ' ') {
        str = str.substring(0, i+1) + str[i+1].toUpperCase() + str.substring(i+2);
    }
    }
   return str;
}
console.log (getWordUppercase(str))

// Задание 19
// Написать функцию, которая будет высчитывать сумму чисел от нуля,
// до параметра, который мы в неё передаем, например: getSum(100) должна передавать сумму 
// чисел от 0 до 100 (должно получится 5050)

let summa = 0;
let num = 0;
function getSumm(num) {
for (let i = 0; i <= num; i++) {
summa = summa + i;
}
return summa;
}
console.log (getSumm(100));

// Задание 20
// Суммирование чисел в массиве
// var numbers = [10, 25, 100];
// Hа выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135)
// Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

var numbers = [10, 'hfj', 25, null, 100];
let summArray = 0;
function getSummArray () {
    for (let i = 0; i < numbers.length; i++) {
    if (typeof(numbers[i]) == 'number') {
summArray = summArray + numbers[i];
   }
   
}
return summArray;
}
console.log(getSummArray())

//Задание 21
// Площадь треугольника 
let heightTriangle = 0;
let widthTriangle = 0;
function squareTriangle (widthTriangle, heightTriangle) {
return (1/2)*widthTriangle*heightTriangle;
}
console.log (squareTriangle(36, 18))

// Задание 22
// Создать объект пользователя интернет магазина
let userInternetShop = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    isLikeFruits: true,
    IQ: 120
}
console.log(userInternetShop);

//Задание 23
let userStudents = [
    {
        name: 'Вася',
        percentTest: 80
    },
    {
        name: 'Зина',
        percentTest: 77
    },
    {
        name: 'Катя',
        percentTest: 88
    },
    {
        name: 'Петя',
        percentTest: 95
    },
    {
        name: 'Вова',
        percentTest: 57
    }, 
    {
        name: 'Дима',
        percentTest: 63
    }, 
    {
        name: 'Валя',
        percentTest: 97
    }, 
    {
        name: 'Маша',
        percentTest: 72
    }, 
]
//если процент > 90 - 5
//если процент > 80 - 4
//если процент > 70 - 3
//если процент > 60 - 2
for (let i = 0; i<userStudents.length; i++){
    if (userStudents[i].percentTest >= 90) {
console.log (`${userStudents[i].name} - 5`);
    } else if (userStudents[i].percentTest >=80 &&  userStudents[i].percentTest < 90) {
console.log (`${userStudents[i].name} - 4`);
    } else if (userStudents[i].percentTest >= 70 && userStudents[i].percentTest < 80) {
console.log (`${userStudents[i].name} - 3`);
    } else {
console.log (`${userStudents[i].name} - 2`);
    }
}

// Задание 24
// -   Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
//   и возвращает массив значений лежащих в поле age
let array = [
    { name: 'Viahaslau', age: 9 },
    { name: 'Andrew', age: 50 },
    { name: 'Elena', age: 27 },
    { name: 'Maria', age: 34 }
]
function getAges(array) {
    let ageArray = [];
   for (let i = 0; i < array.length; i++) {
   ageArray.push(array[i].age);
   }
   return ageArray;
} 
console.log(getAges(array))

//Задача 25
function getArrayField(array, key) {
    let ageArray = [];
   for (let i = 0; i < array.length; i++) {
       if (key == 'age') {
   ageArray.push(array[i].age)
} else {
   ageArray.push(array[i].name)
}
   }
   return ageArray;
} 
console.log(getArrayField(array,'name'))

// Задание 26
// Написать код, который заменит регистр каждого символа на противоположный.
// Например 'Hello world' -> 'hELLO WORLD'

let newStr = ' '
function changeRegistr () {
    newStr = str.split('')
    for (let i = 0; i < newStr.length; i++){
    if (newStr[i].toUpperCase () == newStr[i]) {    
   newStr[i] = newStr[i].toLowerCase()
            } else {
        newStr[i] = newStr[i].toUpperCase()
           }
 }
 newStr = newStr.join('')
return newStr 
}
console.log (str)
console.log (changeRegistr(newStr))

//Задание 27
// Напишите код, который добавит символ двоеточие(':') между нечетными числами.
// Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

let string27 = '68757631'
let newString27 = ''
function addColon () {
    for (let i = 0; i < string27.length; i++) {
        newString27 += string27[i];
        if (string27[i] % 2 == 1 && string27[i+1] % 2 == 1){
            newString27 +=  ':';
        }
    }
    return newString27;
}

console.log(addColon(string27))


// Задание 29
// Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
// Для 2021 это будет 5.
let string = '2021';
let sumString = 0;
function getSumString (string) {
    for (let i = 0; i < string.length; i++) {
        sumString += Number(string[i])
    }
    return sumString
}
console.log (getSumString('2015'))

//Задание 30
let string30 = 'HeLLo MY DeAr FRieNdS';
function getStringLowerCase () {
    string30 = string30.toLowerCase()
    for (let i = 0; i < string30.length; i++) {
        if (string30[i] == ' ') {
          string30 = string30.substring(0, i) + '-' + string30.substring(i+1);
        }
    }
    return string30;
    
}
console.log(getStringLowerCase(string30))

//Задание 31
let string31 = 'беларуский государственный университет информатики радиоэлектроники';
let abr = string31[0];
function getAbbreviation (string31) {
    for (let i = 0; i < string31.length; i++) {
        if (string31[i] == ' ') {
            abr += string31[i+1]
                   } 
    }
    abr = abr.toUpperCase();
    return abr;
}
console.log (getAbbreviation(string31))