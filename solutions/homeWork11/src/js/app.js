"use strict";

const childrensBooks = [
  {
    foto: new URL ('https://s1-goods.ozstatic.by/2000/490/102/102490_0.jpg'),
    description: 'The book about the Harry Potter who survived',
    link: 'https://oz.by/books/more102490.html',
    genre: 'fantasy-magic'
  },
  {
    foto: new URL ('https://s5-goods.ozstatic.by/2000/899/528/10/10528899_0.jpg'),
    description: 'The book about a boy and his problems',
    link: 'https://oz.by/books/more10528899.html',
    genre: 'fantasy-historical'
  },
  {
    foto: new URL ('https://s4-goods.ozstatic.by/2000/687/593/10/10593687_0.jpg'),
    description: 'Stev Unhealthy Addiction Book',
    link: 'https://oz.by/books/more10593687.html',
    genre: 'fantasy'
  },
  {
    foto: new URL ('https://s5-goods.ozstatic.by/2000/888/19/1/1019888_0.jpg'),
    description: 'Something about a wardrobe',
    link: 'https://oz.by/books/more1019888.html',
    genre: 'fantasy-historical'
  },
]
const adultsBooks = [
  {
    foto: new URL ('https://s5-goods.ozstatic.by/2000/449/348/10/10348449_0.jpg'),
    description: 'You read this book and you feel at home',
    link: 'https://oz.by/books/more10348449.html',
    genre: 'fantasy-historical'
  },
  {
    foto: new URL ('https://s2-goods.ozstatic.by/2000/72/970/10/10970072_0.jpg'),
    description: 'About chess and mind games',
    link: 'https://oz.by/books/more10970072.html',
    genre: 'fantasy-historical'
  },
  {
    foto: new URL ('https://s4-goods.ozstatic.by/2000/27/823/10/10823027_0.jpg'),
    description: 'Meat, bones, fire, snow and Dornish wine',
    link: 'https://oz.by/books/more10823027.html',
    genre: 'fantasy-magic'
  },
  {
    foto: new URL ('https://s1-goods.ozstatic.by/2000/281/916/10/10916281_0.jpg'),
    description: 'The movie will be released soon, judging by the trailer it will be cool',
    link: 'https://oz.by/books/more10916281.html',
    genre: 'fantasy'
  },
]

const selectFantasyChild = childrensBooks.filter(ele => ele.genre == 'fantasy')
const selectFantasyMagicChild = childrensBooks.filter(ele => ele.genre == 'fantasy-magic')
const selectFantasyHistoricalChild = childrensBooks.filter(ele => ele.genre == 'fantasy-historical')

const selectFantasyAdult = adultsBooks.filter(ele => ele.genre == 'fantasy')
const selectFantasyMagicAdult = adultsBooks.filter(ele => ele.genre == 'fantasy-magic')
const selectFantasyHistoricalAdult = adultsBooks.filter(ele => ele.genre == 'fantasy-historical')


function makeForm(formName) {
  return `
    <form name="${formName}">
    <div class="form__wrapper">
    <div>
        <label>Имя</label>
        <input class="input__name" type="text" name='user_name' data-storage="true">
    </div>
    <div>
        <label>Возраст</label>
        <input class="input__pas" type="number" name='user_age' data-storage="true">
    </div>
    <div>
        <label>Жанр</label>
        <select class="input__select" name='user_select' data-storage="true">
            <option value="" disabled selected>Выберите интересующий жанр</option>
            <option value="1">Fantasy</option>
            <option value="2">Fantasy-magic</option>
            <option value="3">Fantasy-historical</option>
        </select>
    </div>
    <div>
        <button class="input__btn" type="submit" name="submit">
            Войти
        </button>
    </div>
    </div>
</form>
    `;
}

function makeStorageKey(name, value, select) {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, value, select);
  }
}

function makeStorageKeysFromForm(event) {
  event.preventDefault();
  const form = this.closest("form");
  console.log(form);
  for (let item of form) {
    if (item.dataset.storage) {
      if (item.value != "") {
        makeStorageKey(item.name, item.value, item.select);
      } else {
        alert("Заполните все поля формы");
      }
    }
  }
}

function getNumberSelectChild (item) {
  if (item === "1") {
    return selectFantasyChild
  } else if (item === "2"){
    return selectFantasyMagicChild
  } else if (item === "3"){
    return selectFantasyHistoricalChild
  }
}

function getNumberSelectAdult (item) {
  if (item === "1") {
    return selectFantasyAdult
  } else if (item === "2"){
    return selectFantasyMagicAdult
  } else if (item === "3"){
    return selectFantasyHistoricalAdult
  }
}


function getContentByAge(age, limit, container) {
  if (age > limit) {
    selectGenreAdult.forEach(ele => {
    container.insertAdjacentHTML("beforeend", makeAdultsContent(ele))});
    container.insertAdjacentHTML ("beforebegin", createGreetings ())
  } else {
    selectGenreChild.forEach(ele => {
    container.insertAdjacentHTML("beforeend", makeCildrenContent(ele))});
    container.insertAdjacentHTML ("beforebegin", createGreetings ())
  }
} 

// Немного не понял как именно доработать makeAdultsContent и makeCildrenContent, поэтому сделал так

function createGreetings () {
  return `<div class="greetings">Hello, dear ${storageName}, this selection is for you!</div>`
}

function makeAdultsContent(data) {
  return (
    `<div class = "books__card">
    <img class = "books__foto" src = "${(data.foto)}">
    <div>
    <p class = "books__info"> Description: ${(data.description)}</p>
    <a href = "${(data.link)}" class = "books__link">Click to buy</a>
    </div>
    </div>`
 )
}

function makeCildrenContent(data) {
  return (
    `<div class = "books__card">
    <img class = "books__foto" src = "${(data.foto)}">
    <div>
    <p class = "books__info"> Description: ${(data.description)}</p>
    <a href = "${(data.link)}" class = "books__link">Click to buy</a>
    </div>
    </div>`
 )
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
const storageSelect = localStorage.getItem("user_select");
const formName = "user_form";
const formBtnName = "submit";
const ageLimit = 18;

const selectGenreChild = getNumberSelectChild(storageSelect)
const selectGenreAdult = getNumberSelectAdult(storageSelect)


generatePageContent(APP_CONTAINER, formName);