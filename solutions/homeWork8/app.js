//Задание 45

//У каждого сегмента должен быть свой стиль карточки. Вывести каждый из сегментов в body  
// Это не сделала


const cars = [
    {  
        foto: 'https://avcdn.av.by/advertbig/0000/3433/6121.jpeg',
        brand: 'Audi',
        name: 'A6',
        price: 7000,
        year: 2005,
        volume: 2.4,
        fuel: 'petrol',
    },
    {
        foto: 'https://avcdn.av.by/advertbig/0000/3061/2322.jpeg',
        brand: 'Bentley Continental',
        name: 'Flying Spur II',
        price: 79999,
        year: 2014,
        volume: 6.0,
        fuel: 'petrol',
    },
    {
        foto: 'https://avcdn.av.by/advertbig/0000/1799/6437.jpeg',
        brand: 'Cadillac',
        name: 'Escalade III',
        price: 19000,
        year: 2007,
        volume: 6.2,
        fuel: 'petrol',
    },
    {
        foto: 'https://avcdn.av.by/advertbig/0000/3337/9000.jpeg',
        brand: 'Ferrari',
        name: 'California I',
        price: 73000,
        year: 2013,
        volume: 4.3,
        fuel: 'petrol',
    },
    {
        foto: 'https://avcdn.av.by/advertbig/0000/3371/9071.jpeg',
        brand: 'Moskvich',
        name: 423,
        price: 1999,
        year: 1960,
        volume: 1.6,
        fuel: 'petrol',
    },
    {
        foto: 'https://avcdn.av.by/advertbig/0000/3189/4045.jpeg',
        brand: 'Toyota',
        name: 'Camry XV70',
        price: 23499,
        year: 2018,
        volume: 2.5,
        fuel: 'petrol',
    },
]

const lowCars = cars.filter((el) => el.price <= 10000)
const middleCars = cars.filter((el) => el.price >= 10000 && el.price <= 40000)
const premiumCars = cars.filter((el) => el.price >= 40000)

function makeCarsList(arr, cls) {
    const list = document.createElement("main");
    list.classList.add(cls)
    arr.forEach((element) => {
        list.innerHTML += `<div>
        <div class = "foto"> 
        <img src = "${element.foto}" > </img> </div>

<h1> ${element.brand} </h1> 
<h2> ${element.name} </h2>
<div class = "card-price"> ${element.price} $ </div>
<div class = "card-year">${element.year}</div>
<div class = "card-volume">${element.volume}</div>
<div class = "card-fuel">${element.fuel}</div>
    </div>`;
    });
    return list;
}

const body = document.querySelector("body");
body.append(makeCarsList(lowCars, 'lowCars'));
body.append(makeCarsList(middleCars, 'middleCars'));
body.append(makeCarsList(premiumCars, 'premiumCars'));