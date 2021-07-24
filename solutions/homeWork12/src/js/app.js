'use strict'

function createCardsStructure (item) {
    return (
        `<div class="card">
            <div class="card__logo">
                <img class="card__logo-img" src="${item.build}">
            </div>
            <div class="card__title">
                ${item.name}
            </div>
            <div class="card__timing">
                <span class="icon-stopwatch"></span>${item.time}
            </div>
            <div class="card__cost">
                <span class="icon-barcode"></span> ${item.cost}
            </div>
    </div>`
    )
}

async function gedMoviesInfo (container) {
    const respons = await fetch('./src/data/movies.json')
    const movies = await respons.json()
    movies.forEach(ele => {
        container.insertAdjacentHTML('beforeend', createCardsStructure(ele))
    })
}

const appDivContainer = document.querySelector("#app");

gedMoviesInfo(appDivContainer)