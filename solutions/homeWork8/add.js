'use strict'

//Задание 45
// const auto = [
//     {foto: new URL('https://vnx.su/images/avto/honda/big/civic-5d-mk8.jpg'), mark:'Honda', model:'Civic5D', year: 2008, engine: 1.8, fuel:'petrol', price: 6000,},
//     {foto: new URL('https://a.d-cd.net/e8b31v/960.jpg') , mark:'Сitroen', model:'C5', year: 2008, engine: 1.8, fuel:'petrol',price: 6000,},
//     {foto: new URL('https://all-auto.org/wp-content/uploads/2019/04/Renault-Scenic-1-1.jpg') , mark:'Renault', model:'Scinic', year: 2000, engine: 1.6, fuel:'petrol',price: 3000,},
//     {foto: new URL('http://s8.postimg.cc/8cchdbn6d/Golf_GTI_Match_2_ret.jpg') , mark:'Volkswagen', model:'Golf', year: 1986, engine: 1.6, fuel:'diesel',price: 1000,},
//     {foto: new URL('http://i.ytimg.com/vi/exvOiRJLguM/maxresdefault.jpg') , mark:'Acura', model:'ZDX', year: 2013, engine: 3.7, fuel:'petrol',price: 18000,},
//     {foto: new URL('https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/honda-civic__308270-620x415x70.jpg') , mark:'Honda', model:'Civic10', year: 2019, engine: 1.5, fuel:'petrol',price: 17000,},
// ]

// function makeAutoCard(array, stl) {
//   const card = document.createElement("ol")
//   card.classList.add(stl)
//   array.forEach((element) => {
//     card.innerHTML += `<li>${Object.values(element)}</li>`
//   })
//   return card
// }

// const body = document.body
// body.append(makeAutoCard(auto, 'style_car'))

// Задание со звездочкой
// const auto = [
//   {foto: new URL('https://vnx.su/images/avto/honda/big/civic-5d-mk8.jpg'), mark:'Honda', model:'Civic5D', year: 2008, engine: 1.8, fuel:'petrol', price: 6000,},
//   {foto: new URL('https://a.d-cd.net/e8b31v/960.jpg') , mark:'Сitroen', model:'C5', year: 2008, engine: 1.8, fuel:'petrol',price: 6000,},
//   {foto: new URL('https://all-auto.org/wp-content/uploads/2019/04/Renault-Scenic-1-1.jpg') , mark:'Renault', model:'Scinic', year: 2000, engine: 1.6, fuel:'petrol',price: 3000,},
//   {foto: new URL('http://s8.postimg.cc/8cchdbn6d/Golf_GTI_Match_2_ret.jpg') , mark:'Volkswagen', model:'Golf', year: 1986, engine: 1.6, fuel:'diesel',price: 1000,},
//   {foto: new URL('http://i.ytimg.com/vi/exvOiRJLguM/maxresdefault.jpg') , mark:'Acura', model:'ZDX', year: 2013, engine: 3.7, fuel:'petrol',price: 18000,},
//   {foto: new URL('https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/honda-civic__308270-620x415x70.jpg') , mark:'Honda', model:'Civic10', year: 2019, engine: 1.5, fuel:'petrol',price: 17000,},
// ]

// const cheapAuto = auto.filter(ele => {
//   if (ele.price < 4000) {
//     return ele.price
//   }
// })
// const middleAuto = auto.filter(ele => {
//   if (ele.price > 3000 && ele.price < 10000) {
//     return ele.price
//   }
// })
// const expensiveAuto = auto.filter(ele => {
//   if (ele.price > 10000) {
//     return ele.price
//   }
// })

// function makeAutoCard(array, stl) {
//   const card = document.createElement("ol")
//   card.classList.add(stl)
//   array.forEach((element) => {
//     card.innerHTML += `<li>${Object.values(element)}</li>`
//   })
//   return card
// }

// const body = document.body
// body.append(makeAutoCard(cheapAuto, 'cheap_auto'))
// body.append(makeAutoCard(middleAuto, 'middle_auto'))
// body.append(makeAutoCard(expensiveAuto, 'expensive_auto'))