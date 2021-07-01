// 1.
// let a = "1"
// let b = "2"
// let c = " белых медведей"
// let sum=a+b+c
// console.log(sum)

// 2.
// let a="10"
// let b="2"
// let c="5"
// let sum = +a + +b + +c
// console.log(sum)

// 3.
// let num = 10;
// num++
// ++num
// num--
// console.log(num)

// 4.
// let a=1
// let b=5
// let c=8
// let d=3
// let e=6
// console.log (Math.max (a,b,c,d,e))

// 5.

// let a1=5 % 3
// let a2=3 % 5?????????????????????
// let a3=5 + '3'
// let a4='5' - 3
// let a5=75 + 'кг'

// console.log (a1)
// console.log (a2)
// console.log (a3)
// console.log (a4)
// console.log (a5)

// 6.
// let a = 25
// let b = 17
// alert (Math.min (a,b))

// 7.
// for (let i = 0; i < 15 ; i++) {
//     if(i%2==0){
//         console.log(i+'chet')
//     }
//     else{
//         console.log(i+'nechet')
//     }
// }

// 8.

// for (let i =0; i<100; i++) {
//     if(i%3==0 && i%5==0) {
//         console.log (i+' FizzBuzz')
//     }
//     else if(i%3==0) {
//         console.log(i+' Fizz')
//     }
//     else if(i%5==0) {
//         console.log(i+' Buzz')
//     }

// }

// 9;
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 == 0) {
//     sum += i;
//     console.log();
//   } else if (i % 4 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 10;???????????????????????????????????????????????????????????????????????????????????????????????????????/
// let a1 = -14
// let a2 = 12
// let a3 = -10
// let i = prompt ("number")

// if(i<0) {
//     alert("вы ввели отрицательное число")
// } else {
//     alert('вы ввели положительное число')
// }

// 11;
// let a1 = typeof("Привет")
// let a2 = typeof(123)
// let a3 = typeof(true)
// let a4 = typeof("true")

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// 12;
// let a1 = (5 + 3) * (5 - 3)
// let a2 = (10 - 6) * 200
// let a3 = (534 * 132) / 18
// let a4 =  123 * 3 + 10
// let a5 = 12 * 13 * 14
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)

// 13;
// let nubmerAlert = prompt('Введите число')
// if (nubmerAlert%2==0) {
//     alert('Четное число')
// } else  {
//     alert ('Нечетное число')
// }

// 14;
// let creditSum = 1000;
// let creditPercent = 0.1 / 12;
// let creditTerm = 5 * 12;

// let annyetPayment =
//   creditSum *
//   ((creditPercent * (1 + creditPercent) ** creditTerm) /
//     ((1 + creditPercent) ** creditTerm - 1));

// let sumPercent = annyetPayment * creditTerm - creditSum;

// console.log(creditSum + " бел. руб. сумма кредита");
// console.log(annyetPayment.toFixed(2) + " бел. руб. ежемесячный платёж");
// console.log(sumPercent.toFixed(2) + " бел. руб. переплата");

// 15;
// let product = {
//     name : 'Colt',
//     price : 2000,
//     type : 'firearms',
//     releaseDate : 1856,
//     manufacturer : 'Colt Industry',
//     country: 'USA',
//     isGaranty : 'infinity',
// }
// console.log (product)

// 16;
// let peoples = [
//   {
//     name: "Petr",
//     age: 18,
//   },
//   {
//     name: "Jonh",
//     age: 46,
//   },
//   {
//     name: "Cross",
//     age: 23,
//   },
//   {
//     name: "Denis",
//     age: 17,
//   },
//   {
//     name: "Larion",
//     age: 0,
//   },
//   {
//     name: "Agutin",
//     age: 67,
//   },
// ];
// let userTrue = [];
// let userFalse = [];
// for (let i = 0; i < peoples.length; i++) {
//   if (peoples[i].age < 18) {
//       userFalse.push(peoples[i])
//   } else {
//       userTrue.push(peoples[i])
//   }
// }

// console.log("Порно недоступно" , userFalse)

// console.log("Не хотите вызвать девочку недорого?", userTrue);

// // 17;

// let i=0
// let m = '#'

// for (i = 0; i < 6; i++) {
//     console.log(m)
// 	m +='#';

// }

// 18;
// let string = 'Маша взяла аркадия за ляшку'
// console.log(string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '))

// 19;
// let sum = 0;
// function getSum() {
//   for (let i = 0; i < 101; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   return;
// }

// getSum();

// 20.

// var numbers = [10, 25, 100];
// let a = numbers[0]
// let b = numbers[1]
// let c = numbers[2]
// console.log(a+b+c)

// 21;
// let length;
// let width;
// function getSquare() {
//   alert(
//     "Прежде чем узнать площадь прямоугольника, вы должны знать его параметры."
//   );
//   length = prompt("Какая длина вашего прямоугольника?");
//   width = prompt("Какая ширина вашего прямоугольника?");
//   let square = length * width;
//   alert("Площадь вашего прямоугольника = " + square);
// }

// getSquare();

// 22.

// let user = {
//     name:'Artem',
//     email: 'sokrushitel2009@mail.ru',
//     likeFruits : 'neutral',
//     iQ : 100000
// }
// console.log(user)

// 23; ????????????????????????????????????????????????????????????????????????????????????????????????????????

// let users = [
//   {
//     name: "Vasily",
//     trueTest: 81,
//   },
//   {
//     name: "Zina",
//     trueTest: 77,
//   },
//   {
//     name: "Kat",
//     trueTest: 88,
//   },
//   {
//     name: "Petr",
//     trueTest: 98,
//   },
//   {
//     name: "Vova",
//     trueTest: 57,
//   },
// ];
// // если процент > 90 - 5
// // если процент > 80 - 4
// // если процент > 70 - 3
// // если процент > 60 - 2
// for (let i = 0; i < users.length; i++) {
//   if (users[i].trueTest < 60) {
//     console.log('тупая группа ' + users[i].name);
//   } else if (users[i].trueTest > 60 && users[i].trueTest <70 ) {
//     console.log('1 группа ' + users[i].name);
//   } else if (users[i].trueTest > 70 && users[i].trueTest <80) {
//     console.log('2 группа ' + users[i].name);
//   } else if (users[i].trueTest >80 && users[i].trueTest <90) {
//     console.log('3 группа ' + users[i].name);
//   } else if (users[i].trueTest > 90) {
//     console.log('лучшая группа ' + users[i].name);
//   }
// }

// 24.
// const users = [
//     { name: 'Sergey', age: 32 },
//     { name: 'Daria', age: 37 },
// ]
// function getAges(array,arrae) {
// console.log(array)
// console.log(arrae)
// }

// getAges(users[0].age,users[1].age);


25.

