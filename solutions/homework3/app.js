// //Задание 1 
// let a = 1
// let b = 2
// let c = "белых медведей"
// let resulteOne = " " + a + b + " " + c
// console.log(resulteOne)

// //Задание 2 
// //Нельзя использовать одни и те же переменные, поэтому буквы другие 
// let d = 10
// let h = 2
// let m = 5
// let g = d + h + m
// console.log(g)

// //Задание 3 

// let num = 10
// num++
// num++
// num--
// alert(num)

// //Задание 4 
// let array = [3, 6, 2, 56, 32]

// //Задание 5

// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'кг'
// console.log(a6, a7, a8, a9, a10)

// //Задание 6

// let j = 15
// let k = 34
// if (j < k) {
//     alert(j)
// } else if (j > k) {
//     alert('Неправильно')
// }
// //Задание 7

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i, 'это четное');
//     } else if (i % 2 != 0) {
//         console.log(i, 'это не четное')
//     }
// }

// //Задание 8

// for (let m = 1; m <= 100; m++) {
//     if (m % 3 == 0) {
//         console.log('Fizz')
//     }
// }
// for (let l = 1; l <= 100; l++) {
//     if (l % 5 == 0) {
//         console.log('Bizz')
//     }
// }
// for (let r = 1; r <= 100; r++) {
//     if (r % 3 == 0 && r % 5 == 0) {
//         console.log('FizzBizz')
//     }
// }


// //Задание 9 

// let sum1 = 0, sum2 = 0;


// for (let i = 0; i < 1000; i++) {
//     if (i % 3 === 0) {
//         sum1 += i;
//     }
//     if (i % 4 === 0) {
//         sum2 += i;
//     }

// }
// alert('сумма чисел кратных 3: ' + sum1);
// alert('сумма чисел кратных 4: ' + sum2);

// //Задание 10 как вывести число полность я не знаю

// let a1 = -6
// let a2 = 7
// let a3 = 99
// console.log('Знаки чисел a1, a2, a3:', Math.sign(-6), Math.sign(7), Math.sign(99))

// //Задание 11

// let str = "Привет"
// let numbers = 123
// let flag = true
// let txt = "true"

// console.log(typeof str)
// console.log(typeof numbers)
// console.log(typeof flag)
// console.log(typeof txt)

// //Задание 12
// let d1 = (5 + 3) * (5 - 3)
// let d2 = (10 - 6) * 200
// let d3 = (534 * 132) / 18
// let d4 = 123 * 3 + 10
// let d5 = 12 * 13 * 14
// console.log(d1, d2, d3, d4, d5)

// //Задание 13

// function checkParity(num) {
//     if (isNaN(num)) alert("Это не число");
//     else alert(num % 2 == 0 ? "Число четное" : "Число не четное");
// }
// checkParity(parseInt(prompt("Введите число")))

// //Задание 14

// const creditYears = 5
// const credit = 1000
// let overPayment = 0
// for (let i = 0; i < creditYears; i++) {
//     // overPayment = overPayment + (credit * 0.10)
//     overPayment += credit * 0.10

// }
// console.log(overPayment)

// //Задание 15

// const product = {
//     name: "apple",
//     price: 3,
//     type: "fructs",
//     releaseDate: "30.04.2022",
//     manufacturer: "Horki",
//     country: "Belarus",
//     isGaranty: "20 days"
// }
// console.log(product.name)
// console.log(product.price)
// console.log(product.type)
// console.log(product.releaseDate)
// console.log(product.manufacturer)
// console.log(product.country)
// console.log(product.isGaranty)

// //Задание 16 

// const users = [{ name: "Ivan", age: 18 }, { name: "Petr", age: 12 }, { name: "Sidor", age: 25 }];
// const areAdult = [];
// const areNotAdult = [];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//         areAdult.push(users[i].name)
//     } else {
//         areNotAdult.push(users[i].name)
//     }
// }

// console.log("Are not adult", areNotAdult)
// console.log("Are adult", areAdult)

// //Задание 17


 for (let i = 0; i < 6; i++) {
    let grid = "";
    for (let j = 0; j < i; j++) {
        grid +="#";
    }
    console.log(grid);
}