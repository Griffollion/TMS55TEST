//Задание 1
//  let a = 1
//  let b = 2
//  let c = " белых медведей"
//  let result = a + (b + c)
//  console.log (result)
 //Задание 2
//  let a = 10
//  let b = 2
//  let c = 5
//  let summ = a + b + c
//  alert (summ)
//  console.log(summ)
//Задание 3
// let num = 10
// num ++
// ++ num
// num --
// alert(num);
//Задание 4
// let a = 3
// let b = 2
// let c = 5
// let d = 1
// let e = 6
// if (a>b && a>c && a>d && a>e){
//     alert(a)
// } else if(b>a && b>d && b>c && b>e){
//     alert(b)
// }else if(c>a && c>b && c>d && c>e){
//     alert(c)
// } else if(d>a && d>b && d>c && d>e){
//     alert(d)
// } else {
//     alert(e)
// }
//Задание 5
// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'кг' 
// console.log(a6, a7, a8, a9, a10)
//Задание 6
// let a = 7
// let b = 3
// if (a>b){
//     alert(b)
// }
// else{
//     alert(a)
// }
//Задание 7
// for (let i = 0; i<15; i++){
//     if(i%2==0){
//         console.log(0)
//     } else{
//         console.log(1)
//     }
// }
//Задание 8
// for (let i = 0; i<100; i++){
//     if (i % 3 == 0){
//         console.log('Fizz')
//     } else if (i % 5 == 0){
//         console.log('Buzz')
//     }else{
//         console.log('FizzBuzz')
//     }
// }
//Задание 9
// let summ3 = 0
// let summ4 = 0
// for (let i =0; i<1000; i++){
//     if (i % 3 ==0){
//         summ3 +=i
//     }
//     if(i % 4 ==0){
//         summ4 +=i
//     }
    
// }
// console.log(summ3)
// console.log(summ4)
//Задание 11
// let str = 'Привет'
// let num = 123
// let flag = true
// let txt = 'true'
// console.log(typeof(str))
// console.log(typeof(num))
// console.log(typeof(flag))
// console.log(typeof(txt))
//Задание 12
// let a1 = (5 + 3) * (5 - 3)
// let a2 = (10 - 6) * 200
// let a3 = (534 * 132) / 18
// let a4 = 123 * 3 + 10
// let a5 = 12 * 13 * 14
// console.log(a1, a2, a3, a4, a5)
//Задание 13
// let numb = prompt('Введите целое число', 0)
// if (numb % 2 == 0){
//     alert('Это четное число')
// }else{
//     alert('Это нечетное число')
// }
//Задание 15
// let product ={
//     name : 'iphone', 
//     price : 670, 
//     type : 'smartphone', 
//     releaseDate : 2020, 
//     manufacturer : 'apple', 
//     country : 'Canada', 
//     isGaranty : true
// }
// console.log(product.name, product.price, product.type, product.releaseDate, product.manufacturer, product.country, product.isGaranty)
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//HOMEWORK 4
//Задание 18
// let n = ""
// let theSentence = 'Hello, my dear friend'
// for (let i = 0; i< theSentence.length; i++){
//     if (theSentence[i] == ' '){
//      ++i
//       n=n+' '+ theSentence[i].toUpperCase()  
        
//     } else n=n+theSentence[i] 
   
// }
// console.log(n)
//Задание 19
// let sum = 0
// function getSum(a,b){
//     for (let i =0; i<=100; i++){
//         sum+=i
//     }
//     return sum;
// }
// console.log(getSum(0,100))
//Задание 20
// var numbers = [10, 25, 100]
// let sum = 0
// for (i=0; i < numbers.length; i++){
    
//         sum+=numbers[i]
    
// }
// console.log(sum)
//Задание 21
// function getSquare(a,b){
//     let square = a*b
//     return square
// }
// console.log(getSquare(5,4))
//Задание 22
// let internetShopUser = {
//     name : 'Vika',
//     email : 'vikysik@gmail.com',
//     isAFruitLover : true,
//     iqLevel : 65

// }
// console.log(internetShopUser)
//Задание 23

// let students = [{name:'Вася', percent:80},{name:'Зина', percent:77}, {name:'Катя', percent:88},{name:'Петя', percent:95}, {name:'Вова', percent:57}]
// for (let i=0; i<students.length; i++){
// if (students[i].percent>90){
//     console.log(students[i].name + ' - ' + 5)
// }else if (students[i].percent>80){
//     console.log(students[i].name + ' - ' + 4)
// }else if (students[i].percent>70){
//     console.log(students[i].name + ' - ' + 3)
// }else if  (students[i].percent>60)
//     console.log(students[i].name + ' - ' + 2)}


