// Task 45
// - Создать массив, содержащий в себе объекты автомобиля. Объектов должно быть не менее шести.

// Каждый объект должен иметь следующие свойства:
// фотография (ссылка на фотку, можете брать url из интернета),
// марка (нарп. audi)
// название (напр. a4)
// цена
// год изготовления
// объем двигателя
// тип топлива 

// Далее необходимо написать функцию, которая будет создавать html карточку объекта автомобиля (либо через create либо через шаблонную строку). Вид карточки - на ваше усмотрение. Стили тоже.
// В карточке необходимо отобразить все свойства которые есть в объекте. Т.е. фото, марка год и т.д.

// Добавить карточки автомобилей в body


const cars = [
{
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 12000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'
},
{
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 14000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'
},
{
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 23000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'
},
{
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 1000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'
},
{
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 32000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'},

    {photo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Porsche_Taycan_at_IAA_2019_IMG_0786.jpg",
    model: 'Porsche',
    name: 'Taycan',
    price: 50000,
    manufacture: 2019,
    volume: 5.5,
    fuel: 'petrol'
},
]

const cheapСars = cars.filter((el) => el.price <= 10000)
const middleCars = cars.filter((el) => el.price >= 10000 && el.price <= 40000)
const premiumCars = cars.filter((el) => el.price >= 40000)

function carsList(arr, cls) {
    const list = document.createElement("div");
    list.classList.add(cls)
    arr.forEach((element) => {
        list.innerHTML += `<div>
<div class = "photo"> 
<img src = "${element.photo}"></img> 
</div>
<h1> ${element.model} </h1> 
<h2> ${element.name} </h2>
<div class = "price"> ${element.price} $ </div>
<div class = "year">${element.manufacture}</div>
<div class = "volume">${element.volume}</div>
<div class = "fuel">${element.fuel}</div>
    </div>`;
    });
    return list;
}

const body = document.querySelector("body");
body.append(carsList(cheapСars, 'cheapСars'));
body.append(carsList(middleCars, 'middleCars'));
body.append(carsList(premiumCars, 'premiumCars'));