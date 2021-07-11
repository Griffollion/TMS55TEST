'use strict'
const dataCars = [
    {
    foto: 'https://img.salon.av.by/catalog/bmw/x5/g05/0b/9/3.jpeg',
    brend: 'BMW',
    model: 'X5',
    price: 155000,
    year: 2021,
    volume: '3L',
    fuel: 'diesel',
    },
    {
    foto: 'https://img.salon.av.by/catalog/hyundai/creta/novaya_kreta/0b/b/1.jpg',
    brend: 'Hyundai',
    model: 'Creta',
    price: 38000,
    year: 2019,
    volume: '2L',
    fuel: 'petrol',
    },
    {
    foto: 'https://img.salon.av.by/catalog/volkswagen/jetta/2015/0f/2/rezultat_jetta_2014._volkswagen_jetta_1.jpg.jpg',
    brend: 'Volkswagen',
    model: 'Jetta',
    price: 43000,
    year: 2016,
    volume: '1.4L',
    fuel: 'petrol',
    },
    {
    foto: 'https://img.salon.av.by/catalog/toyota/camry_8_pokolenie/0c/5/605c66a269aef.jpg',
    brend: 'Toyota',
    model: 'Camry',
    price: 76000,
    year: 2018,
    volume: '3,5L',
    fuel: 'petrol',
    },
    {
    foto: 'https://auto.ironhorse.ru/wp-content/uploads/2020/07/A6-C8-front.jpg',
    brend: 'Audi',
    model: 'A6',
    price: 177000,
    year: 2021,
    volume: '2L',
    fuel: 'petrol',
    },
    {
    foto: 'https://avcdn.av.by/advertbig/0000/3118/8085.jpeg',
    brend: 'Renault',
    model: 'Duster',
    price: 28000,
    year: 2016,
    volume: '2L',
    fuel: 'petrol',
    },
    {
    foto: 'https://avcdn.av.by/advertbig/0000/3407/6024.jpeg',
    brend: 'Mercedes-Benz',
    model: 'GLA II',
    price: 122000,
    year: 2021,
    volume: '1,3L',
    fuel: 'petrol',
    },

]

function makeCarsList(arr){
    let h1 = document.createElement('h1')
        h1.innerText = 'Объявления о продаже автомобилей'
        h1.className = 'title-cards'
        const body = document.querySelector('body')
        body.append(h1)
    arr.forEach(element => {
        let card = document.createElement('div')
        card.className = 'card-car'
        card.innerHTML += `
            <div class = "card-foto">
                <img src = "${element.foto}"></img>
            </div>
            <h2>${element.brend}</h2>
            <h3>${element.model}</h3>
            <div class = "card-price"> ${element.price} р.</div>
            <div class = "card-year">${element.year}</div>
            <div class = "card-volume">${element.volume}</div>
            <div class = "card-fuel">${element.fuel}</div>
        </div>`
        body.append(card)
    });
  
}

makeCarsList(dataCars)