'use strict'


let form = document.forms['user_form']

let inputName = form.user_name

let inputPassword = form.user_password


let divName = document.getElementById('div-name')

let divPassword = document.getElementById('div-password')


inputName.keydown = (function() {
    divName.innerHTML = inputName.value
})()

inputPassword.keydown = (function() {
    divPassword.innerHTML = inputPassword.value
})()















































