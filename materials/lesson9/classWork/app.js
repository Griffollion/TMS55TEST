// СПОСОБЫ ОБРАБОТКИ СОБЫТИЙ
//const div = document.querySelector('div')

// function sayHello() {
//     alert('Hello')
// }

// div.onclick = function() {
//     alert('Hi')
// }

// div.onclick = sayHello

// div.addEventListener('click',()=> {
//     alert('Listener is Awersome!')
// })

// function showMessage() {
//     alert('Listener is Awersome!')
// }

// function showMessage2() {
//     alert('Listener is Awersome! 2')
// }

// div.addEventListener('click',() => {
//     showMessage()
//     showMessage2()
// })

// ВСПЛЫТИЕ И ПОГРУЖЕНИЕ
// const container = document.querySelector('.container')
// const containerWrapper = document.querySelector('.container-wrapper')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click',() => {
//     alert('Это событие кнопки')
// })

// containerWrapper.addEventListener('click',() => {
//     alert('Это событие контейнера обертки')
// })

// container.addEventListener('click',() => {
//     alert('Это событие контейнера')
// })

// window.addEventListener('scroll', ()=> {
//     console.log('123')
// }, {once: true})

// function showMessage() {
//     console.log(123)
//     window.removeEventListener('scroll', showMessage)
// }

// window.addEventListener('scroll', showMessage, false)

// СОБЫТИЕ EVENT

// const btn = document.querySelector('.btn')

// document.addEventListener('click', (event) => {
//     console.dir(event.target)
//     console.dir(event.currentTarget)
// })

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function(event) {
//     console.log(this)
//     const el = this // event.currentTarget === this
//     el.style = 'background: #ff0'
// })

// function showElementClassName(el) {
//   console.log(el.className);
// }

// function fillItem(item,color) {
//     item.style = `background: ${color}`
// }

// const items = document.querySelectorAll(".container__item");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     showElementClassName(item);
//     fillItem(item,'#00f')
//   });
// });

// ДЕЛИГИРОВАНИЕ
// function showElementClassName(el) {
//   console.log(el.className);
// }

// function fillItem(item, color) {
//   item.style = `background: ${color}`;
// }

// const container = document.querySelector(".container");
// container.addEventListener("click", (event) => {
//   const target = event.target;

//   if(!target) return

//   if (target.classList.contains('container__item')) {
//     showElementClassName(target);
//     fillItem(target, "#00f");
//   }
// });

// ОСТАНОВКА ВСПЛЫТИЯ
// const container = document.querySelector('.container')
// const containerWrapper = document.querySelector('.container-wrapper')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click',(event) => {
//     event.stopPropagation()
//     alert('Это событие кнопки')
// })

// containerWrapper.addEventListener('click',(event) => {
//     event.stopPropagation()
//     alert('Это событие контейнера обертки')
// })

// container.addEventListener('click',() => {
//     alert('Это событие контейнера')
// })

// ОСТАНОВКА СОБЫТИЯ ПО УМОЛЧАНИЮ
const btn = document.querySelector('.btn')
btn.addEventListener('click',(event) => {
    event.preventDefault();
    alert('Это событие кнопки')
})
