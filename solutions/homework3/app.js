// Задание 1

    // a = 1,
    // b = 2,
    // c = " белых медведей"

    // a = String(a)
    // b = String(b)

    // let result = a + b + c

    // console.log(result)



// Задание 2
    // a = 10,
    // b = 2,
    // c = 5

    // let result = a + b + c

    // alert(result)
    // console.log(result)
    
    

// Задание 3
    // let num = 10;
    // num++;
    // ++num;
    // num--;
    // alert(num);



// Задание 4

// Маленькое отсупление.. Очень сильно захотелось сделать по простому, через цикл 
// (без использования Math)
// Вообще, еще на первом занятии заметил большую схожесть JS с C++ и C# 


//первый способ

// let numbers = [21, 108, 23, 12, 200]
// let max = 0

//     for(let i = 0; i < numbers.length; i++){
//         if (max < numbers[i]) {
//             max = numbers[i]
//         }
//     }
 
//     console.log(max)


//второй способ (максимально простой)

// let numbers = Math.max(21, 108, 23, 12, 200)
// console.log(numbers)



// Задание 5
    
    // let a6 = 5 % 3
    // let a7 = 3 % 5
    // let a8 = 5 + '3'
    // let a9 = '5' - 3
    // let a10 = 75 + 'кг'

    // alert(a6 + ", " + a7 + ", " + a8 + ", " + a9 + ", " + a10 )

// Задание 6

    // let numberOne = 23
    // let numberTwo = 31

    // if(numberOne > numberTwo) {
    //     alert(numberTwo)
    // }
    // else {
    //     alert(numberOne)
    // }


// Задание 7 

    // for (let i = 0; i < 15; i++) {
    //     if (i % 2 == 0){
    //         console.log(i + " это четное")
    //     }
    //     else {
    //         console.log(i + " это нечетное")
    //     } 
    // }


// Задание 8
    // (для наглядности, я решил вывести рядом и само число)
    
    // for (let i = 1; i < 100; i++){
    //     if ( i % 3 == 0){
    //         console.log(i + " Fizz")
    //     } 

    //     if ( i % 5 == 0){
    //         console.log(i + " Buzz")
    //     }

    //     if ( i % 3 == 0 && i % 5 == 0){
    //         console.log(i + " FizzBuzz")
    //     }
    // }

// Задание 9
    // let kratnoeChetirem = []
    // let kratnoeTrem = []
    
    // for (let i = 0; i < 1000; i++){
    //     if(i % 4 == 0){
    //         kratnoeChetirem.push(i)
    //     }
    //     else if (i % 3 == 0){
    //         kratnoeTrem.push(i)
    //     }
    // }

    // console.log("Числа кратные четырем\n" + kratnoeChetirem)
    // console.log("Числа кратные трем\n" + kratnoeTrem)



// Задание 10
// (знаю, что замудрил, уверн, что есть другой способ)

    // let a1 = 32
    // let a2 = -23
    // let a3 = 7

    // if (a1 > 0 && a2 > 0 && a3 > 0) {
    //    a1 = "+"
    //    a2 = "+"
    //    a3 = "+"
    // }
    // else if (a1 < 0 && a2 < 0 && a3 < 0) {
    //     a1 = "-"
    //     a2 = "-"
    //     a3 = "-"
    //  }
    //  else if (a1 > 0 && a2 < 0 && a3 < 0) {
    //     a1 = "+"
    //     a2 = "-"
    //     a3 = "-"
    //  }
    //  else if (a1 < 0 && a2 > 0 && a3 < 0) {
    //     a1 = "-"
    //     a2 = "+"
    //     a3 = "-"
    //  }
    //  else if (a1 < 0 && a2 < 0 && a3 > 0) {
    //     a1 = "-"
    //     a2 = "-"
    //     a3 = "+"
    //  }
    //  else if (a1 > 0 && a2 > 0 && a3 < 0) {
    //     a1 = "+"
    //     a2 = "+"
    //     a3 = "-"
    //  }
    //  else if (a1 < 0 && a2 > 0 && a3 > 0) {
    //     a1 = "-"
    //     a2 = "+"
    //     a3 = "+"
    //  }
    //  else if (a1 > 0 && a2 < 0 && a3 > 0) {
    //     a1 = "+"
    //     a2 = "-"
    //     a3 = "+"
    //  }
    //  else {
    //      alert("Что-то не так")
    //  }
    //  alert("Знаки чисел a1, a2, a3: " + a1 +", " + a2+", " + a3)


// Задание 11

    // let str = "Привет"
    // let num = 123
    // let flag = true
    // let txt = "true"
    // console.log(typeof(str),typeof(num),typeof(flag),typeof(txt))


// Задание 12

    // let a1 = (5 + 3) * (5 - 3)
    // let a2 = (10 - 6) * 200
    // let a3 = (534 * 132) / 18
    // let a4 = 123 * 3 + 10
    // let a5 = 12 * 13 * 14

    // alert(a1 + ", " + a2 + ", "+ a3 + ", "+ a4 +", "+ a5)



// Задание 13

    // let value = prompt("Введите любое число: ")
    
    // if(value % 2 == 0){
    //     alert("Число, которое вы вписали - четное")
    // }
    // else{
    //     alert("Число, которое вы вписали - не четное")
    // }

// Задание 14 
    // больше всего времени потратил на понимание данной формулы
    // и скорее всего, я не правильно ее понял))

    // let credit = 1000
    // let procentStavka = 10
    // let year = 5

    // procentStavka = (procentStavka / 100)

    // let month = year * 12

    
    // let result = credit * ((procentStavka * (1 + procentStavka)^month))/((1 + procentStavka)^month - 1)

    // result = result - credit 

    // alert("Предоплата по кредиту составляет:\n"+result+" бел.руб")



// Задание 15 
    // let product = {
    //     name: "Milk",
    //     price: 3.12,
    //     type: "Milk product",
    //     releaseData: "12.12.2020",
    //     manufacturer: "Deonisd",
    //     country: "Polsha",
    //     isGaranty: false
    // }

    // console.log(product)



// Задание 16
    
    // let adult = []
    // let teen = []

    // let usersName = [
    //     "Andrey",
    //     "Tim",
    //     "Ivan",
    //     "Kateryna",
    //     "Karina",
    //     "Maksim",
    //     "Nikita",
    //     "Masha",
    // ]

    // let usersAge = [
    //     12,
    //     10,
    //     23,
    //     22,
    //     21,
    //     13,
    //     17,
    //     19,
    // ]

    // for (i=0; i < usersName.length; i++) {

    //     if (usersAge[i] <= 18){
    //         teen.push(usersName[i])
    //     }
    //     else if (usersAge[i] > 18){
    //         adult.push(usersName[i])
    //     }
    //     else {
    //         console.log("Ошибка в данных")
    //     }
    // }

    // console.log("Совершенолетние "+ adult)
    // console.log("Несовершенолетние "+teen)



    // Задание 17
    //долго думал, как сдеалать данную штуку, но в итоге всё получилось))
    
    // let x = 0
    // for (i = 0; i < 20; i++){
    //     let a = ""
    //     for(x = 0; x < i; x++){
    //         a = a + "#"
    //     }
    //     console.log(a+"\n")

    // }
