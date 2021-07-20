//Задание 47 часть 1

// document.querySelector('.name').addEventListener('input',()=>{
//     let data = document.querySelector('.name').value
//     document.querySelector('.out-name').innerHTML = data
// })
// document.querySelector('.password').addEventListener('input',()=>{
//     let data = document.querySelector('.password').value
//     document.querySelector('.out-password').innerHTML = data
// })
// Задание 47 часть 2*

let form = document.querySelector(".formWithValidation");
let ValedateBtn = form.querySelector(".btn");
let name = form.querySelector(".name");
let password = form.querySelector(".password");
let fields = form.querySelectorAll(".validate");

let generateError = function (text) {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};
let removeValidation = function () {
  let errors = form.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

let checkFieldsPresence = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError("Can not be blank");

      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

let checkPasswordNumbers = function () {
  if (password.value.length < 5) {
    let error = generateError("Please enter at least 5 characters");
    password.parentElement.insertBefore(error, password);
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  removeValidation();
  checkFieldsPresence();
  checkPasswordNumbers();
});
