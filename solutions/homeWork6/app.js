//Задача 35
//Вариант 1


// const arr1 = [-1, 2, 3]
// const reversedArr = arr1.reverse()
// console.log('Развернутый массив', reversedArr)

//Вариант 2

// const arr1 = [-1, 2, 3]
// console.log('Развернутый массив [', arr1[2], arr1[1], arr1[0], ']') 

//Задача 36


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const sum = numbers.reduce((total, items) =>  total+items,0)
// console.log(sum) 


//Задача 37

// const keysAndValues = {
//   a: 'b',
//   c: 'd'
// };

// function swapingObj(obj) { //ввод функции
//   const resultOfSwapping = {}; //ввод переменной результата пермены ключей и обьектов

//   Object.keys(obj).forEach(function(value) { //введение замены ключей и обьектов для каждоо значения функции (если я правильно разобрался)
//     var key = obj[value];
//     resultOfSwapping[key] = value;
//   });
//   return resultOfSwapping; //возвращаем результат
// };

// console.log(swapingObj(keysAndValues)); //Выводим в консоль

//Задача 38 ввела в ступор и в панику


//Задача 39
// const users = [
//   {name: 'Denis', gender: 'Male'},
//   {name: 'Olya', gender: 'Female'},
//   {name: 'Sergei', gender: 'Male'},
//   {name: 'Sveta', gender: 'Female'}
// ];
// let genderMale = users.filter(item => item.gender == 'Male');
// console.log('Мужчины: ', genderMale)  //Хочу вывести только имя без пола (console.log(genderMale.name)) результат undefined, если использую find то получается вывести только имя, но выводит только один результат

// let genderFemale = users.filter(item => item.gender == 'Female');
// console.log('Женщины: ', genderFemale)