'use strict'

const cars = [
    {
        carBrand: 'BMW',
        carModel: '7 Series g12 (Long)',
        carPhoto: 'https://avcdn.av.by/advertbig/0000/1386/0625.jpeg',
        carPriceIn$: 152000
    },
    {
        carBrand: 'Bogdan',
        carModel: '2310',
        carPhoto: 'https://avcdn.av.by/advertbig/0000/3455/4242.jpeg',
        carPriceIn$: 1800
    },
    {
        carBrand: 'Chevrolet',
        carModel: 'Camaro VI',
        carPhoto: 'https://avcdn.av.by/advertbig/0000/3075/7692.jpeg',
        carPriceIn$: 39000
    },
    {
        carBrand: 'Ford',
        carModel: 'Mustang IV',
        carPhoto: 'https://avcdn.av.by/advertbig/0000/3274/3768.jpeg',
        carPriceIn$: 25000
    }
]

const luxuryCars = cars.filter((el) => el.carPriceIn$ >= 40000)
const commonCars = cars.filter((el) => el.carPriceIn$ < 40000 && el.carPriceIn$ > 10000)
const poorCars = cars.filter((el) => el.carPriceIn$ <= 10000)

function makeCarsCard(arr, cls) {
    const list = document.createElement('div');
    list.classList.add(cls)
    // list.className = 'wraper'
    
    arr.forEach((element) => {
      list.innerHTML += `<div> Brand: ${element.carBrand}</div>`;
      list.innerHTML += `<div> Model: ${element.carModel}</div>`;
      list.innerHTML += `<div> Price: ${element.carPriceIn$}</div>`;
      list.innerHTML += `<img src = '${element.carPhoto}'></img`;
    });
    return list;
  }

const body = document.querySelector("body");
body.append(makeCarsCard(luxuryCars, 'luxury'));
body.append(makeCarsCard(commonCars, 'common'));
body.append(makeCarsCard(poorCars, 'poor'));





