let form = document.forms["user_form"];
let textareaName = document.querySelector(".textarea-name");
let textareaPass = document.querySelector(".textarea-password");
let name = form.user_name;
let pass = form.user_password;
let isValid;

form.addEventListener("input", function () {
  textareaName.textContent = name.value;
  textareaPass.textContent = pass.value;
});

function checkValid(key, place, col) {
  if (!key.value || key.value.length < col) {
    place.innerHTML = `введите данные, не менне ${col} символов`;
    key.classList.remove("valid");
    place.classList.remove("valid");
    key.classList.add("invalid");
    place.classList.add("invalid");
  } else {
    key.classList.remove("invalid");
    place.classList.remove("invalid");
    key.classList.add("valid");
    place.classList.add("valid");
  }
}

let btn = form.action;

btn.addEventListener("click", function (event) {
  event.preventDefault();
  checkValid(name, textareaName, 2);
  checkValid(pass, textareaPass, 5);
});

// function validateForm(data) {
//   let checking = Array.from(data).reduce((arr, el) => {
//     if (el.classList.contain("invalid")) {
//       arr.push(false);
//     }
//     return arr;
//   }, []);

//   if (checking.length != 0) {
//     isValid = false;
//   } else isValid = true;
// }

// input.onfocus = function(event){
//   if(this.classList.contain('invalid')){
//     this.classList.remove('invalid')

//   }
// }
