"use strict";
function makeForm(formName) {
  return `
    <h1>Регистрация в online кинотеатре</h1>
    <form name="${formName}" class="user-form">
    <div>
        <label>Введите ваше имя</label>
        <p>
        <input type="text" name='user_name' data-storage="true" class="user-name">
        </p>
    </div>
    <div>
        <label>Введите ваш возраст</label>
        <p>
        <input type="number" name='user_age' data-storage="true" class="user-age">
        </p>
    </div>
    <div>
        <button type="submit" name="submit" class="button">
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
  for (let item of form) {
    if (item.dataset.storage) {
      if (item.value != "") {
        makeStorageKey(item.name, item.value);
      } else {
        alert("Заполните все поля формы");
      }
    }
  }
}

async function getContentFromServer(container){
   const response = await fetch("/solutions/homework-11/render_content/src/movies.json")
   const data = await response.json()
   let listContentByAge = data.filter(element => +element.age <= storageAge)
   container.append(getContentByAge(listContentByAge))
  }

function  getContentByAge(arr){
  let section = document.createElement("section");
  section.className = "section-cards wrapper";
  arr.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-film";
    cardDiv.innerHTML = `
    <a href="${element.URL}">
        <div class="card-img">
            <img src="${element.img}"></img>
        </div>
        <div class="card-title">
            ${element.title}
        </div>
    </a>
        `;
    section.append(cardDiv);
  });
  return section;
}

function generatePageContent(container, formName) {
  if (storageAge && storageName) {
    const h1 = document.createElement("h1");
    h1.innerHTML = `<p>Привет, ${storageName}.</p> 
    <p>Мы рады предложить тебе фильмы в online кинотеатре:</p>`;
    container.append(h1);
    getContentFromServer(container)
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

generatePageContent(APP_CONTAINER, formName);

