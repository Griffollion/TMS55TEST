'use strict'

// задание 42

console.log('Решение задания 42:')

function Calculator() {
        let oneValue
        let twoValue
    this.read = function(){
        oneValue = +prompt('Введите первое значение')
        twoValue = +prompt('Введите второе значение')
        return [oneValue, twoValue]
        
    }
    this.sum = function(){
        return oneValue + twoValue
    }
    this.mul = function(){
        return oneValue*twoValue
    }

}

let calculator = new Calculator()
    calculator.read()
    alert ('Sum='+ calculator.sum() )
    alert ('Mul='+ calculator.mul() )

// задание 43

console.log('Решение задания 43:')

let sumTo = (n) => (n == 1) ? n : sumTo(n-1) + n

let resultSum = sumTo(100)

console.log(resultSum)

// задание 43

console.log('Решение задания 43:')

function getSum(a){
   return function(b){
       return a+b
   }
}

let sum = getSum(7)(6)
console.log(sum)

