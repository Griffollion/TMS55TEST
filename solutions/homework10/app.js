'use strict'
const form = document.forms['user_form']
const userName = form.user_name;
const userPassword = form.password;

const textName = document.querySelector('[data-realtime-name]');
userName.addEventListener('input', () => {
textName.innerText = userName.value
})

const textPassword = document.querySelector('[data-realtime-password]');
userPassword.addEventListener('input', () => {
textPassword.innerText = userPassword.value
})