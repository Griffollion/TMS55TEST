'use strict'

//Задание 42

function Calculator() {

    this.read = function () {
        this.a = +prompt('Введите а:', 0)
        this.b = +prompt('ВВедите b:', 0)
    }

    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}

let calculator = new Calculator()
calculator.read()

alert("Sum=" + calculator.sum())
alert("Mul=" + calculator.mul())

//Задание 43

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(100) );

//Задание 44

function sum (a){
return function (b){
    return a+b
}
}
console.log (sum(2)(6))
