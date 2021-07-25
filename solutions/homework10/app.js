'use strict'
const form = document.forms['user_form']
const userName = form.user_name
const userPassword = form.password
const submitBtn = form.action

const textName = document.querySelector('[data-realtime-name]')
userName.addEventListener('input', () => {
  textName.innerText = userName.value
})

const textPassword = document.querySelector('[data-realtime-password]')
userPassword.addEventListener('input', () => {
  textPassword.innerText = userPassword.value
})

function validateNameAndPassword() {
  if (userName.value != '' && userPassword.value.length >= 5) {
    userName.classList.remove('invalid');
    password.classList.remove('invalid')
    userName.classList.add('valid')
    userPassword.classList.add('valid')
    alert('Форма заполнена правильно')
  } else if (userName.value != '' && userPassword.value.length < 5){
    userPassword.classList.add('invalid')
    userName.classList.add('valid')
    alert('Пароль должен быть более 5 символов')
  } else if (userName.value == '' && userPassword.value.length >= 5) {
      userName.classList.add('invalid')
      userPassword.classList.add('valid')
      alert('Введите имя')
  } else {
      userName.classList.add('invalid');
      userPassword.classList.add('invalid');
      alert('Введите имя и пароль не менее 5 символов')
  }
}

form.addEventListener('submit', (el) => {
  el.preventDefault()
  validateNameAndPassword(form)
})
