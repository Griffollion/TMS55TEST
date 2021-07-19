// //Задание 18
// let string = 'The road to hell is paved with good intentions'
// console.log(
// string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
// )

// //Задание 19
// function getSum(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//     sum += i
//     }
//     return sum
//     }

//     console.log(getSum(100))

// //Задание 20
// //Задание 21

//   const calculateTriangleArea = (x, y) => x * y 
//   console.log(calculateTriangleArea(10, 5))

//Задание 22
const userShop = {
    name: 'Yana',
    email: 'yana.varsak@gmail.com',
    preferences: 'like',
    IQ: 144

}
console.log(userShop.name)
console.log(userShop.email)
console.log(userShop.preferences)
console.log(userShop.IQ)

//Задание 23


//Задание 26
let str = "Hello world"

function change_register(str) {
    let new_str = ""
    let len = str.length
    for (let i = 0; i < len; i++) {
        if (str[i] === str[i].toLowerCase()) {
            new_str += str[i].toUpperCase()
        } else {
            new_str += str[i].toLowerCase()
        }
    }
    return new_str
}

alert(change_register(str))

//Задание 27
const num = prompt('Введите число', 556);

function colonOdd(num) {
    let str = num.toString()
    let result = [str[0]]
    for (var i = 1; i < str.length; i++) {
        if ((str[i - 1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            result.push(':', str[i])
        }
        else {
            result.push(str[i])
        }
    }
    return result.join('')
}

alert(colonOdd(num))


//Задание 29
function getSumNumber(num) {
    let sum = 0, tmp
    while (num) {
        tmp = num % 10
        num = (num - tmp) / 10
        sum += tmp
    }
    return sum
}
alert(getSumNumber(2021))

//Задание 31 
let text = ''
let arr = "Java Script".split(' ')
for (i = 0; i < arr.length; i++) {
    text += arr[i].substr(0, 1)
}
alert(text)