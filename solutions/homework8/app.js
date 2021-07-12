'use strict'

const car = [
  {
    modelCar: "mersedes",
    nameCar: "cls 500",
    fotoCar: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/41010101213558561600x1060.jpg?itok\u003dVkduV10P',
    yearCar: 2020,
    typeOfFuel: "benzin",
    price: 70000,
    engineVolume: "5.0",
  },

  {
    modelCar: "bmw",
    nameCar: "seria 7",
    fotoCar: 'https://tarantas.news/uploads/images/2020/05/13/BB_001.jpg',
    yearCar: 2017,
    typeOfFuel: "diesel",
    price: 45000,
    engineVolume: "3.0",
  },
  {
    modelCar: "audi",
    nameCar: 'https://autoreview.ru/images/Article/1709/Article_170922_860_575.jpg',
    fotoCar: 3,
    yearCar: 2015,
    typeOfFuel: "diesel",
    price: 20000,
    engineVolume: "2.7",
  },
  {
    modelCar: "honda",
    nameCar: 'https://carsweek.ru/upload/iblock/365/365c117693e9f542f073ea04ebdf7b74.jpg',
    fotoCar: 4,
    yearCar: 2010,
    typeOfFuel: "diesel",
    price: 23000,
    engineVolume: "2.5",
  },
  {
    modelCar: "tayota",
    nameCar: 'https://s0.rbk.ru/v6_top_pics/media/img/1/88/755948825610881.jpg',
    fotoCar: 5,
    yearCar: 2020,
    typeOfFuel: "benzin",
    price: 37000,
    engineVolume: "3.5",
  },
  {
    modelCar: "infinity",
    nameCar: 'https://www.moscow-infiniti.ru/upload/fileman/dc7/dc7980cb02451a1a5cd4ae397184df56.jpg',
    fotoCar: 6,
    yearCar: 2013,
    typeOfFuel: "benzin",
    price: 18000,
    engineVolume: "3.7",
  },
];


let h1 = document.createElement('h1')
h1.innerText = 'Best cars in the WORLD'
h1.className = 'title-cards'
const body = document.querySelector("body");
body.append(h1)

function getCardCar(arr, cls) {
    const cardCar = document.createElement("div");
  arr.forEach(element => { 
      const cars = document.createElement('div')
      cardCar.classList.add(cls)
      cardCar.className = 'card-car'
      card.innerHTML =`<div class = "card-foto">
      <img src = "">${element.fotoCar}</img>
      </div>`
      card.innerHTML =`<div class = "car-model">${element.modelCar}</div>`
      card.innerHTML =`<div class = "car-name">${element.nameCar}</div>`
      card.innerHTML =`<div class = "car-year">${element.yearCar}</div>`
      card.innerHTML =`<div class = "car-fuel">${element.typeOfFuel}</div>`
      card.innerHTML =`<div class = "car-price">${element.price}</div>`
      card.innerHTML =`<div class = "car-engine">${element.engineVolume}</div>`

      cardCar.append(cars)
  });
  return cardCar
}
body.append(getCardCar(cardCar))

