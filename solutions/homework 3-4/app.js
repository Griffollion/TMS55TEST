//Задача 1
/*
let a = 1;
let b = 2;
a = String('1');
let c = ' белых медведей';
let result = a + b + c;
console.log(result) */

//Задача 2
/*let a = 10;
let b = 2;
let c = 5;
let result = a + b + c;
console.log(result)

//Задача 3

let num = 10;
num ++;
num ++;
num --;
alert(num);*/

//Задача 4
/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let comparison = [a, b, c, d, e];
alert(Math.max(...comparison));
*/

//Задача 5
/*

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6, a7, a8, a9, a10) */


//Задача 6
/*
let firstNumber = 42;
let secondNumber = 56;
if (firstNumber > secondNumber) {
    alert(secondNumber)
} else {
    alert(firstNumber)
}
*/


//Задача 7

/*
for(let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
      console.log(i,'Это ЧЕТНОЕ!');
    } else {
      console.log(i,'Это НЕЧЕТНОЕ!');
    }
}
*/

//Задача 8
/*

for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i, 'Кратное 3!');      
    } if (i % 5 == 0) {
        console.log(i, 'Кратное 5!');
    }
    if (i % 5 ==0 || i % 3 == 0) {
        console.log(i, 'кратное и 3 и 5!');
    }
    else{
        console.log(i, 'Не подходит под условия задачи')
    }
    
}
*/

//Задача 9

/*
function multiplySum (Number) {
    let sum = 0;
    for(let i = 0; i <= 1000; i++) {
        if (i % 3 ==0 && i % 4 == 0) {
            console.log(sum += i);
        }
    }
    return sum;
}

multiplySum(0)
*/

//Задача 14 | я немного не понял как функцией сделать. запутался в следущем

/*let loanAmount
loanAmount = prompt('Введите необходимую сумму кредита');
let interestRate
interestRate = prompt('Введите процентную ставку кредитного продукта (минимум 10%)')
let loanTerms
loanTerms = prompt('введите срок пользования кредитным продуктом (от 5 до 25 лет)')

function overpayment () {
    for (let overpayment = interestRate * (loanAmount / 100) * loanTerms) {
        if (interestRate => 10 && loanTerms => 5) {
            console.log('Ваша переплата составит:', overpayment)
            
        }
    }
*/

//Поэтому сделал более простм способом, но очень интересует довести до ума первый способ
let loanAmount
loanAmount = prompt('Введите необходимую сумму кредита');
let interestRate
interestRate = prompt('Введите процентную ставку кредитного продукта (минимум 10%)')
let loanTerms
loanTerms = prompt('введите срок пользования кредитным продуктом (от 5 до 25 лет)')

let overpayment = interestRate * (loanAmount / 100) * loanTerms
console.log ('Переплата по данному продукту составит:', overpayment)

