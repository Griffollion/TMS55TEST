'use strict'
 function createCard(obj){
     return(
        `
        <div class="card">
        <a class="card__link" href=${obj.link} >
        <div class="card__img">
            <img src=${obj.img}  alt="">
        </div>
        <div class="card__name">
          <p> ${obj.name} </p>
        </div>
        <div class="card__date">
            <p>${obj.date}  </p>
        </div>
        <div class="card__price">
            <p> ${obj.price} </p>
        </div>
        </a>
    </div>
        `
     )
 }
 async function getDataFromMovies  ()  {
     const response = await fetch('/solutions/homeWork12/src/data/movies.json')
     const data = await response.json()

     data.forEach(el => {
        document.querySelector('#app').insertAdjacentHTML('beforeend',createCard(el)) 
     }) 
 }

 getDataFromMovies() 