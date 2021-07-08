'use strict'

//Задание 42
// function Calculator () {
//     this.read1 = prompt('Введите первое значение!')
//     this.read2 = prompt('Введите второе значение!')
//     this.sum = Number(this.read1) + Number(this.read2)
//     this.mul = this.read1 * this.read2
// }

// let calculator = new Calculator()
// alert('Сумма значений = ' + calculator.sum)
// alert('Произведение значений = ' + calculator.mul)

//Задание 43 
// Рекурсия вызвала проблему, вроде ничего сложного, но что-то тупил.
// function pow(num) {
//   if (num === 1) {
//     return 1
//   }
//     return num + pow(num - 1)
// }

// console.log(pow(500))

//Задание 44
// function sum(a) {
//     return function(b) {
//       console.log (a + b)
//     }
//   }
// sum(1)(1)
// sum(2)(5)
// sum(4)(-1)