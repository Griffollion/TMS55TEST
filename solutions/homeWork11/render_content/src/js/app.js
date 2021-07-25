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
        <button class= "btn" type="submit" name="submit">
            Войти
        </button>
    </div>
</form>
    `;
}
let adultArray = 
` 
<div class="classContainer adultArray">
<a href="https://www.kinopoisk.ru/film/523362/">
  <div class="card">
    <img
      src="/solutions/homeWork11/render_content/src/css/img/600x900-3.jpeg"
    />
    <p>
      Девушка из богатой семьи и хулиган с неотразимой улыбкой. Испанская мелодрама, заставившая плакать весь мир
    </p>
  </div>
</a>
<a href="https://www.kinopoisk.ru/film/1996/">
  <div class="card">
    <img
      src="/solutions/homeWork11/render_content/src/css/img/600x900-6.jpeg"
    />
    <p>
      Девочка из хорошей семьи и bad boy: танец страсти Патрика Суэйзи и Дженнифер Грей в культовой мелодраме о 60-х
    </p>
  </div>
</a>
<a href="https://www.kinopoisk.ru/film/1048334/">
  <div class="card">
    <img
      src="/solutions/homeWork11/render_content/src/css/img/600x900-4.jpeg"
    />
    <p>
      Как неудачливый комик стал самым опасным человеком в Готэме. Бенефис Хоакина Феникса и «Оскар» за саундтрек
    </p>
  </div>
</a>
</div>
`
let childrenArray = `
<div class="classContainer childrenArray">
           
<a href="https://www.kinopoisk.ru/film/775273/">
  <div class="card">
    <img src="/solutions/homeWork11/render_content/src/css/img/f699e7680f500e0745e60e045c861b.jpg" />
    <p>Джазмен хочет сбежать с того света на концерт. Фантазия о призвании и важных мелочах жизни от автора «Вверх»</p>
  </div>
    
  <a href="https://www.kinopoisk.ru/film/8129/">
    <div class="card">
      <img src="/solutions/homeWork11/render_content/src/css/img/600x900.jpeg" />
      <p>Пара догов-далматинцев покидает уютный дом, чтобы спасти своих похищенных щенят. Очаровательная классика</p>
    </div>
    <a href="https://www.kinopoisk.ru/series/46483/">
        <div class="card">
          <img src="/solutions/homeWork11/render_content/src/css/img/600x900-2.jpeg" />
          <p>Нескончаемая погоня оболтуса Волка за удачливым Зайцем. Самый веселый и популярный в СССР мультсериал</p>
        </div>
        
  `

function makeStorageKey(name, value) {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, value);
  }
}

function makeStorageKeysFromForm(event) {
  event.preventDefault();
  const form = this.closest("form");
  console.log(form);
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

function getContentByAge(age, limit, container) {
  if (age > limit) {
    container.insertAdjacentHTML("beforeend", makeAdultsContent());
  } else {
    container.insertAdjacentHTML("beforeend", makeCildrenContent());
  }
}

function makeAdultsContent() {
  return adultArray;
}

function makeCildrenContent() {
  return childrenArray;
}

function generatePageContent(container, formName) {
  localStorage.clear()
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
