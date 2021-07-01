// Задание 18
// Дана строка. 
// Сделайте заглавным первый символ каждого слова этой строки.

let str = 'каждый день - это что-то новое';
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

function getSum(num){
    let summa = 0
    for(let i=0; i <= num; i++){
        summa = summa +i
    }
    return summa
}
console.log(getSum(100))


// Задание 20
// Суммирование чисел в массиве
// Прим. есть массив чисел
// ```javascript
// var numbers = [10, 25, 100];

var numbers = [10, 25, 100];
function arraySum(array){
    let sum = 0
for(let i = 0; i < array.length; i++){
    sum += array[i]
}
return sum
}
const result = arraySum(numbers)
console.log(result)


// задание 21
// площадь прямоугольника
function areaTriangle (widthTriagle, heightTriagle){
return widthTriagle * heightTriagle
}
console.log(areaTriangle(24, 12))

// Задание 22
// Создать объект пользователя интернет магазина
let userAcc = {
    name: 'Vlad',
    email: 'mail@mail.com',
    likeFruits: true,
    IQ: 999
}
console.log(userAcc)


// Задание 23
// У нас есть студенты: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест
let students = [
    {
        name: 'Вася',
        test: 80
    },
    {
        name: 'Зина',
        test: 77
    },
    {
        name: 'Катя',
        test: 88
    },
    {
        name: 'Петя',
        test: 95
    },
    {
        name: 'Вова',
        test: 57
    },
    {
        name: 'Коленька',
        test: 50
    }
]
for(let i = 0; i<students.length; i++){
    if (students[i].test >= 90) {
console.log (`${students[i].name} - 5`);
    } else if (students[i].test >= 80 &&  students[i].test < 90) {
console.log (`${students[i].name} - 4`);
    } else if (students[i].test >= 70 && students[i].test < 80) {
console.log (`${students[i].name} - 3`);
    }else {
        console.log(`${students[i].name} - 2`)
    }
}