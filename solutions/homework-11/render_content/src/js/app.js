"use strict";
function makeForm(formName) {
  return `
    <form name="${formName}">
    <div>
        <label>Имя</label>
        <input type="text" name='user_name' data-storage="true">
    </div>
    <div>
        <label>Возраст</label>
        <input type="number" name='user_age' data-storage="true">
    </div>
    <div>
        <button type="submit" name="submit">
            Войти
        </button>
    </div>
</form>
    `;
}

function makeStorageKey(name, value) {
  localStorage.setItem(name, value);
}

function makeStorageKeysFromForm(event) {
  event.preventDefault();
  localStorage.clear();
  const form = this.closest("form");
   for (let item of form) {
    if (item.dataset.storage) {
      if (item.value != "") {
        makeStorageKey(item.name, item.value);
      } else {
        localStorage.clear();
        alert("Заполните все поля формы");
        return;
      }
    }
  }
}

function generatePageContent(container, formName) {
  container.insertAdjacentHTML("beforeend", makeForm(formName));
  const form = document.forms[formName];
  const formBtn = form[formBtnName];
  formBtn.addEventListener("click", (event) => {
    makeStorageKeysFromForm.call(formBtn, event);
    location.reload();
  });
}

const APP_CONTAINER = document.querySelector("#app");
const formName = "user_form";
const formBtnName = "submit";

generatePageContent(APP_CONTAINER, formName);
