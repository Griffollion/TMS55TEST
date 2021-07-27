'use strict'

// TRY CATCH


// XMLHttpRequerst

// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://myfin.by/kredity/potrebitelskie')
// xhr.timeout = 10000
// xhr.responseType = 'json'
// xhr.send()
// xhr.onload = function() {
//     const data = xhr.response
//     console.log(data)
// }

// xhr.ontimeout = () => {
//     console.log('Время вышло!')
// }


// xhr.onerror = (error) => {
//     console.log(error)
// }


// FETCH
// fetch('https://jsonplaceh').then(response => {
//     return response.json()
// }).then(data => {
//     return console.log(data)
// }).catch()

// async function getDataFromServer() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const response2 = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//     const data = await response
//     const data2 = await response2.json()
//     console.log(data)
//     console.log(data2)
// }

// getDataFromServer()

// function renderUser(obj) {
//     return (
//         `<div> 
//             ${obj.name}
//         </div>`
//     )
// }

function renderUser(obj) {
    return (
        `<div> 
            ${obj.name}
        </div>`
    )
}

async function getDataFromKampykter  ()  {
    const response = await fetch('/src/data/users.json')
    const data = await response.json()
    
    data.forEach(el => {
       document.body.insertAdjacentHTML('beforeend',renderUser(el)) 
    }) 
}

getDataFromKampykter  ()



