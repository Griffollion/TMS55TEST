*/
// Задача 17
/*  let hashtaq = ''
for (let i = 0; i < 15; i++){
    hashtaq += '#'
    console.log(hashtaq)
}
for (let i = 15; i > 0; i++){
    hashtaq -= '#'
    console.log(hashtaq)
} */

//Задача 20


var numbers = [10, 25, 100];
let sum = 0

for (var i = 0;  i < numbers.length; i++) {
   if(typeof numbers[i] == 'number'){
    sum += numbers[i]
    
  } else {
    console.log('Вы ввели не верный тип данных') //а как я задам условия, если весь массив это Object? Проработать массивы функции в т.ч
  }
}

console.log(sum)

//Задача23 

// const students = [
//   {name: 'Yasya', testPercent: 80},
//   {name: 'Zinaida', testPercent: 77},
//   {name: 'Ekaterina', testPercent: 88},
//   {name: 'Petr', testPercent: 95},
//   {name: 'Vova', testPercent: 57},
// ];
// const passedStudents = [];
// const unpassedStudents = [];


//   for(let i = 0; i < students.length; i++){
//     if(students[i].testPercent > 90  ){
//       passedStudents.push(students[i].name, '-5')
//     };
//     if(students[i].testPercent > 80 && students[i].testPercent <= 90)  {
//       passedStudents.push(students[i].name, '-4')
//     };
//     if(students[i].testPercent > 70 && students[i].testPercent <= 80){
//       unpassedStudents.push(students[i].name, '-3')
//     };
//     if(students[i].testPercent > 60 && students[i].testPercent <= 70 ){
//       unpassedStudents.push(students[i].name, '-2')
//     }
    

//   }

// console.log('Списки несдавших студнетов', unpassedStudents)
// console.log('Списки сдавших студентов', passedStudents)
