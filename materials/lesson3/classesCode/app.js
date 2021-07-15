// Математические
// const currentYear = 5
// const userAge = 6
// let result = currentYear + userAge
// result = result + 3
// result += 10
// result -= 10
// result /= 2
// console.log(result)
// let count = 0
// let newCount = 0
// let secondCount = 0
// let thridCount = 0
// thridCount = secondCount = newCount = count + 15
// console.log(thridCount, secondCount, newCount, count)

// Сравнение
// const firtsUserName = '123';
// const secontUserName = "12";
// console.log(result);

// Доступ к свойству
// const city = {
//     name: 'Moscow',
//     square: 375,
//     population: 10000000,
//     mayor: 'Sobyanin',
//     language: 'RU'
// }
// console.log(city.name)

//Логические
// const variable3 = null
// const result = variable3 ?? 'Text from h1'
// console.log(result)

// Условия
// counter = 0
// const userName = "";
// const userAge = 19;
// const userBrain = undefined;
// const isMale = true;
// const userCar = null;
// if (userBrain) {
//   console.log("user has Brain");
// } 
// const richPeoples = [] 
// const poorPeoples = [] 
// const user = {
//     name: 'Denis',
//     age: 19,
//     brain: undefined,
//     isMale: true,
//     car: null
// }
// if(user.brain && user.car && user.age < 50 && user.name === 'Denis') {
//     richPeoples.push(user)
// } else {
//     poorPeoples.push(user)
// }
// console.log('Rich peoples',richPeoples[0])
// console.log('Poor peoples',poorPeoples[0])

// Цикл
// for(let i = 0; i<10; i++) {
//   console.log('Значение i: ',i)
// }

// Условие и цикл. Псевдореальный пример
const users = [
  {
    name: "Oleg",
    age: 60,
    brain: undefined,
    car: 'Audi',
  },
  {
    name: "Denis",
    age: 28,
    brain: 35,
    car: null,
  },
  {
    name: "Liza",
    age: 35,
    brain: 90,
    car: 'Volvo',
  },
  {
    name: "Prokofya",
    age: 89,
    brain: 100,
    car: 'Bently',
  },
  {
    name: "Denis",
    age: 19,
    brain: undefined,
    car: null,
  },
  
]
const richPeoples = [] 
const poorPeoples = [] 

for(let i = 0; i < users.length; i++) {
    if (users[i].brain && users[i].car && users[i].age < 50) {
      richPeoples.push(users[i]);
    } else {
      poorPeoples.push(users[i]);
    }
}

console.log('Rich peoples',richPeoples)
console.log('Poor peoples',poorPeoples)

