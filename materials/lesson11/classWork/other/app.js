// Все методы можно писать без обращения к объекту WINDOW
/* SCREEN */
// console.dir(window.screen)
// const body = document.body
// const block = document.createElement('div')

// block.style.width = screen.availWidth / 2 + 'px'
// block.style.height = screen.availHeight /2 + 'px'
// block.style.backgroundColor = '#ff0'
// body.append(block)

// LOCATION
// console.dir(window.location)
// const URL = 'https://vk.com'
// document.onclick = function() {
//     location.assign(URL)
// }

// NAVIGATION
// console.log(navigator)

// HISTORY
const URL = 'https://vk.com'
console.dir(history)
location.assign(URL)
history.back()
console.dir(history)