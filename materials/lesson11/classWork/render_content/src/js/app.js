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
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, value);
  }
}

function makeStorageKeysFromForm(event) {
  event.preventDefault();
  const form = this.closest("form");
  for (item of form) {
    if (item.dataset.storage) {
      if (item.value != "") {
        makeStorageKey(item.name, item.value);
      } else {
        alert("Заполните все поля формы");
      }
    }
  }
}

function getContentByAge(age, limit, container) {
  if (age > limit) {
    container.insertAdjacentHTML("beforeend", makeAdultsContent());
  } else {
    container.insertAdjacentHTML("beforeend", makeCildrenContent());
  }
}

function makeAdultsContent() {
  return `<div>18+</div>`;
}

function makeCildrenContent() {
  return `<div>1+</div>`;
}

function generatePageContent(container, formName) {
  if (storageAge && storageName) {
    getContentByAge(storageAge, ageLimit, container);
  } else {
    container.insertAdjacentHTML("beforeend", makeForm(formName));
    const form = document.forms[formName];
    const formBtn = form[formBtnName];
    formBtn.addEventListener("click", (event) => {
      makeStorageKeysFromForm.call(formBtn, event);
      location.reload();
    });
  }
}

const APP_CONTAINER = document.querySelector("#app");
const storageName = localStorage.getItem("user_name");
const storageAge = localStorage.getItem("user_age");
const formName = "user_form";
const formBtnName = "submit";
const ageLimit = 18;

generatePageContent(APP_CONTAINER, formName);
