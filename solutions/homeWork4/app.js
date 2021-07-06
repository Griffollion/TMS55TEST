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

