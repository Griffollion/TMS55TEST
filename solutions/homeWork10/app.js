'use strict'

//Задание 47
// Немного не понял в задании пунк в реальном времени поэтому сделал 2 решения первое через blur (с привязкой к инпут)
// и второе через click (с привязкой к кнопке)
// Решение 1
// document.querySelector('.input__name').addEventListener('blur', (event) => {
//     event.preventDefault()
//     const copy = document.querySelector('.input__name').value;
//     document.querySelector('.div__input-name').innerHTML = 'Имя: ' + copy
// })

// document.querySelector('.input__pas').addEventListener('blur', (event) => {
//     event.preventDefault()
//     const copy = document.querySelector('.input__pas').value;
//     document.querySelector('.div__input-pas').innerHTML = 'Пароль: ' + copy
// })

//Решение 2
// document.querySelector('.input__btn').addEventListener('click', (event) => {
//     event.preventDefault()
//     const copy = document.querySelector('.input__name').value;
//     document.querySelector('.div__input-name').innerHTML = 'Имя: ' + copy
// })

// document.querySelector('.input__btn').addEventListener('click', (event) => {
//     event.preventDefault()
//     const copy = document.querySelector('.input__pas').value;
//     document.querySelector('.div__input-pas').innerHTML = 'Пароль: ' + copy
// })

//Задание со звездочкой
const form = document.forms['user__form']
const name = form.user__name
const pass = form.user__pas

function checkInputInfo (input, div){
    document.querySelector('.input__btn').addEventListener('click', (event) => {
        event.preventDefault()
        const copy = document.querySelector(input).value;
        document.querySelector(div).innerHTML = 'Имя: ' + copy
        validateName(name)
        validatePass(pass)
        location.reload()
    })
}

checkInputInfo('.input__name', '.div__input-name')
checkInputInfo('.input__pas', '.div__input-pas')