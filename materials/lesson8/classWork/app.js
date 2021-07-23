// WINDOW

// console.log(window)

// function myCoolFunction() {
//     console.log('This function is Awersom!')
// }

// window.myCoolFunction()

// DOCUMENT
// console.dir(document.body.childNodes)
// console.dir(document.body.children)

//const h1 = document.querySelector('h1')

// document.addEventListener("click", () => {
//     h1.innerHTML = '<span class="accent-text">This isSpan Element</span>'
// })

// const h1 = document.querySelectorAll('h1')
// h1.forEach((el, index) => {
//     el.innerText = `This is h1 number ${index+1}`
// })

// const h1 = document.querySelector('[data-h1]')
// console.dir(h1)

// const h1 = document.querySelector('[data-h1="unique text"]')
// console.dir(h1)

// document.addEventListener('DOMContentLoaded',() => {
//     const h1 = document.querySelector('[data-h1="unique text"]')
//     console.dir(h1)
// })

// const h1 = document.getElementsByTagName('h1')
// console.log(h1)

// СОЗДАНИЕ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
// const myEl = document.createElement('div')
// myEl.innerText = 'My Element'
// myEl.className = 'button'

// Добавление в документ
// const myEl = document.createElement('div')
// myEl.innerText = 'My Element'
// myEl.className = 'button'

// const body = document.body
// body.append(myEl)
// document.querySelector('h1').append(myEl)

// ЗАМЕНА ЭЛЕМЕНТА
// const myEl = document.createElement("a");
// myEl.innerText = "Some link";
// myEl.setAttribute('href', '#')

// const h1 = document.querySelector('h1')
// h1.replaceWith(myEl)

// document.addEventListener("click", () => {
//   const h1 = document.querySelector('h1')
//   h1.replaceWith(myEl)
// });

//УПРАВЛЕНИЕ КЛАССАМИ ЭЛЕМЕНТА
// const link = document.createElement('a')
// link.setAttribute('href', '#')
// link.innerText = 'Custom Link Text'
// link.className = 'custom-link'
// console.log(link.classList)

// const body = document.querySelector('body')
// body.append(link)

// link.addEventListener('click', () => {
//     // link.classList.add('accent')
//     link.classList.toggle('accent')
// })

// ДИНАМИЧЕСКОЕ СОЗДАНИЕ
// const users = [
//   { name: "Polina", isVip: true },
//   { name: "Elizavetta", isVip: true },
//   { name: "Pavel", isVip: false },
//   { name: "Oleg", isVip: false },
// ];

// const vipUsers = users.filter((el) => el.isVip);
// const commonUsers = users.filter((el) => !el.isVip);

// const vipList = document.createElement('ol')
// vipUsers.forEach(user => {
//     vipList.innerHTML += `<li>${user.name}</li>`
// })

// const body = document.querySelector('body')
// body.prepend(vipList)

// const users = [
//   { name: "Polina", isVip: true },
//   { name: "Elizavetta", isVip: true },
//   { name: "Pavel", isVip: false },
//   { name: "Oleg", isVip: false },
// ];

// const vipUsers = users.filter((el) => el.isVip);
// const commonUsers = users.filter((el) => !el.isVip);

// function makeUsersList(arr) {
//   const list = document.createElement("ol");
//   arr.forEach((element) => {
//     list.innerHTML += `<li>${element.name}</li>`;
//   });
//   return list;
// }

// const body = document.querySelector("body");
// body.append(makeUsersList(vipUsers));
// body.append(makeUsersList(commonUsers));


// const users = [
//   { name: "Polina", isVip: true },
//   { name: "Elizavetta", isVip: true },
//   { name: "Pavel", isVip: false },
//   { name: "Oleg", isVip: false },
// ];

// const vipUsers = users.filter((el) => el.isVip);
// const commonUsers = users.filter((el) => !el.isVip);

// function makeUsersList(arr, cls) {
//   const list = document.createElement("ol");
//   list.classList.add(cls)
//   arr.forEach((element) => {
//     list.innerHTML += `<li>${element.name}</li>`;
//   });
//   return list;
// }

// const body = document.querySelector("body");
// body.append(makeUsersList(vipUsers, 'vip'));
// body.append(makeUsersList(commonUsers, 'nischebrody'));


// const card  = `
// <div class="card">
//     <div class="card__name">
//         <span class="accent">Oleg</span>
//     </div>
//     <div class="card__status">VIP</div>
// </div>
// `

// console.dir(card)

// const app = document.querySelector('#app')
// app.insertAdjacentHTML('beforeend', card)


// Работа с элементом документа
// const h2 = document.querySelector('h2')
// console.dir(h2)
// h2.style.color = '#0ff'


