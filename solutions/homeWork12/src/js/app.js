'use strict'
function createCard(obj){
    return(
       `<div class="cards-container">
       <a href=${obj.link}  class="card-link">
       <img src=${obj.picture} class="card-image" alt="">
       <p class="card-name">${obj.name}</p>
       <p class="card-date"> ${obj.date}</p>
       <p class="card-price"> ${obj.price} </p>
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