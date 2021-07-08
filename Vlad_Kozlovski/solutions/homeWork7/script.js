'use strict'
// task 41
// -   Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
// -   вернет массив элементами которого являются эти части.
// -   Пример функции:
//     ```javascript
//         splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// =========================================================================================

// TAsk42
// - Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// - read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// - sum() возвращает сумму введённых свойств.
// - mul() возвращает произведение введённых свойств.
// - Например
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Calculator() {
//     this.read = function(){
//         this.firstValue = prompt ('Введите первое значение')
//         this.secondValue = prompt ('Введите второе значени')
//     }
//     this.sum = function() {
//         return Number(this.firstValue) + Number(this.secondValue)
//         // return this.firstValue*1 + this.secondValue*1
//     }
//     this.mul = function() {
//         return this.firstValue * this.secondValue
//     }
// }
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() ); 
// alert( "Mul=" + calculator.mul() );  

// =========================================================================================

// task 43
// - Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// - Делаем через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// Примеры работы функции
// sumTo(1) //1
// sumTo(2) //3
// sumTo(3) // 3 + 2 + 1 = 6
// sumTo(100) // 100 + 99 + ... + 2 + 1 = 5050


// function sumTo(n) {
//     if (n == 1) {
//     return 1
// }
//     return n + sumTo(n-1)
// } 
// console.log(sumTo(2))

// =========================================================================================

// task 44
// - Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// - Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// - Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4


// function sum(a) {
//     let currentSum = a

//     function sumTwo(b) {
//         currentSum += b 
//         return sumTwo
//     }
//     sumTwo.toString= function() {
//         return currentSum
//     } 
//     return sumTwo
// }
// console.log(sum(45)(333333))

// function sum(a) {
//     return function sumTwo(b){
//         return a + b
//     }
// }
// console.log(sum(33)(11))
