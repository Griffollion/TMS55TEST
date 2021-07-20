function sendForm() {
  if (!isValidForm) {
    console.log("Форма не валидна");
  } else {
    const from = this.closest("form");
    console.log("Форма Валидна");
    //from.submit();
  }
}

const form = document.forms["user_form"];
const name = form.user_name;
const sendBtn = form.action;
let isValidForm = false;

name.onblur = validateName;
sendBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm(form);
  sendForm.call(sendBtn);
});
