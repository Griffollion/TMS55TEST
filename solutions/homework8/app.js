'use strict'



// Задание 45

const cars = [
    {brand: 'audi', model: 'a8', photo: 'https://www.domkrat.by/upload/img_catalog/a4/audi_a4_2020_8.jpg', price: 4400, releaseYear: 2000, engineVolume: 1.9, fuelType: 'дизель'},
    {brand: 'bmw', model: 'x4 m', photo: 'https://img-c.drive.ru/models.photos/0000/000/000/001/5bc/48d6f8e95303d582-large.jpg', price: 45900, releaseYear: 2018, engineVolume: 2.0, fuelType: 'бензин'},
    {brand: 'ford', model: 'galaxy', photo: 'https://s.auto.drom.ru/img1/catalog/photos/fullsize/ford/galaxy/ford_galaxy_27387.jpg', price: 14450, releaseYear: 2013, engineVolume: 1.6, fuelType: 'дизель'},
    {brand: 'toyota', model: 'camry xv40', photo: 'https://d8a6a33f-3369-444b-9b5f-793c13ff0708.selcdn.net/uploads/projects/toyota_tradedealer/uploads/images/camry-video-05042021_mob.jpg', price: 10500, releaseYear: 2009, engineVolume: 2.5, fuelType: 'бензин'},
    {brand: 'peugeot', model: '206', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Peugeot_206_Quicksilver_90.jpg', price: 4800, releaseYear: 2010, engineVolume: 1.0, fuelType: 'бензин'},
    {brand: 'mercedes', model: 'maybach s 650', photo: 'https://cdn.motor1.com/images/mgl/npBG1/s1/2020-mercedes-maybach-s650-night-edition.jpg', price: 69999, releaseYear: 2015, engineVolume: 6.0, fuelType: 'бензин'},
    {brand: 'citroen', model: 'c3', photo: 'https://images.drive.ru/i/0/5e4541d4ec05c4874a000043.jpg', price: 4600, releaseYear: 2009, engineVolume: 1.1, fuelType: 'бензин'}
]


const container = `
<div class="container">

</div>
`


const body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin', container)


function createHTMLCode (arr) {

    arr.forEach(el => {
        const card = `
            <div class="card">
                <div class="card__photo">
                    <img src="${el.photo}" alt="cars">
                </div>
                <div class="card__name">
                    ${el.brand} ${el.model}
                </div>
                <div class="card__release-year">
                    ${el.releaseYear}
                </div>
                <div class="card__fuel-type-engine-volum">
                    ${el.fuelType} ${el.engineVolume}
                </div>
                <div class="card__price">
                    ${el.price}
                </div>
            </div>
            `
        document.querySelector('.container').insertAdjacentHTML('beforeend', card)
    })
}


createHTMLCode(cars)




































































