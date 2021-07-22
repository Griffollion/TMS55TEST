'use strict'
function makeForm(formName) {
  return `
    <form name="${formName}">
    <div>
        <label> Имя </label>
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
    `
}

let adultArray = ` 
<div class="classContainer adultArray">
<a
  href="https://www.bmw.by/ru/all-models/m-series/x6-m/2019/bmw-x6-m-automobiles-highlights.html"
>
  <div class="card">
    <img src="./src/img/bmw_x6.jpg" />
    <p>BMW X6 можно любить – или ненавидеть.</p>
  </div>
</a>

<a
  href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D0%B2%D0%B0%D1%81_%D0%A0%D0%B8%D0%B3%D0%B0%D0%BB"
>
  <div class="card">
    <img src="./src/img/chivas_regal.jpg" />
    <p>Chivas Regal - 18 лет</p>
  </div>
</a>

<a href="https://ru.wikipedia.org/wiki/Jack_Daniel%E2%80%99s">
  <div class="card">
    <img src="./src/img/jack_daniels.jpg" />
    <p>
      Почувствовать настоящий дух Америки просто! Нужно всего лишь
      попробовать уникальный теннесийский виски "Jack Daniels"!
    </p>
  </div>
</a>

<a href="https://lexus-minsk.by/models/nx/">
  <div class="card">
    <img src="./src/img/lexus-nx200.jpg" />
    <p>
      Компактный японский кроссовер удобен для города и для загородных
      поездок небольшой семьи
    </p>
  </div>
</a>

<a
  href="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/gle/suv-v167/amg.html"
>
  <div class="card">
    <img src="./src/img/mers_gle.jpg" />
    <p>
      Неважно, какая дорога. Mercedes-AMG GLE лидирует всегда, даже на
      пересеченной местности.
    </p>
  </div>
</a>

<a
  href="https://vse-vino.ru/tekila/alkogol-tekila-olmeka-istoriya-raznovidnosti-olmeca"
>
  <div class="card">
    <img src="./src/img/olmeca.jpg" />
    <p>Самая дорогая текила, из тех, что я встречала и пила</p>
  </div>
</a>
</div
`
let childrenArray = `
<div class="classContainer childrenArray">
<a href="https://www.lego.com/ru-ru/product/hedwig-75979">
  <div class="card">
    <img src="./src/img/buklya.jpg" />
    <p>Лего Гарри Поттер - сова Букля</p>
  </div>
</a>
<a
  href="https://www.karusel-tv.ru/announce/15156-chaggington_malenkie_parovoziki"
>
  <div class="card">
    <img src="./src/img/chagginton.jpg" />
    <p>Чаггинтон: маленькие паровозики</p>
  </div>
</a>
<a
  href="https://magazin-kukol.by/magazin/product/kukla-enchantimals-kamilla-kenguru-s-semej-gtm31"
>
  <div class="card">
    <img src="./src/img/enchantimals.jpg" />
    <p>Кукла Enchantimals Камилла Кенгуру с семьей</p>
  </div>
</a>
<a
  href="https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5"
>
  <div class="card">
    <img src="./src/img/frozen.jpg" />
    <p>Полнометражный мультфильм Холодное Сердце</p>
  </div>
</a>
<a
href="https://lolsdolls.com/ru/l-o-l-surprise-o-m-g-3-seriya/"
>
<div class="card">
  <img src="./src/img/lol.jpg" />
  <p>L.O.L Surprise! O.M.G – 3 серия</p>
</div>
</a>
<a
  href="https://www.lego.com/ru-ru/product/resistance-i-ts-transport-75293"
>
  <div class="card">
    <img src="./src/img/lego_star_wars.jpg" />
    <p>Лего Звездные войны</p>
  </div>
</a>
<a
  href="https://thomas.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BC%D0%B0%D1%81"
>
  <div class="card">
    <img src="./src/img/tomas.jpg" />
    <p>Томас и его друзья</p>
  </div>
</a>
<a
  href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%83%D0%B1_%D0%92%D0%B8%D0%BD%D0%BA%D1%81"
>
  <div class="card">
    <img src="./src/img/winx.jpg" />
    <p>Клуб Winx - Школа волшебниц</p>
  </div>
</a>
</div>
  `

function makeStorageKey(name, value) {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, value)
  }
}

function makeStorageKeysFromForm(event) {
  event.preventDefault()
  const form = this.closest('form')
  for (let item of form) {
    if (item.dataset.storage) {
      if (item.value != '') {
        makeStorageKey(item.name, item.value)
      } else {
        alert('Заполните все поля формы')
      }
    }
  }
}

function getContentByAge(age, limit, container) {
  if (age > limit) {
    container.insertAdjacentHTML('beforeend', makeAdultsContent())
  } else {
    container.insertAdjacentHTML('beforeend', makeChildrenContent())
  }
}

function makeAdultsContent() {
  return adultArray
}

function makeChildrenContent() {
  return childrenArray
}

function generatePageContent(container, formName) {
  localStorage.clear()
  if (storageAge && storageName) {
    getContentByAge(storageAge, ageLimit, container)
  } else {
    container.insertAdjacentHTML('beforeend', makeForm(formName))
    const form = document.forms[formName]
    const formBtn = form[formBtnName]
    formBtn.addEventListener('click', (event) => {
      makeStorageKeysFromForm.call(formBtn, event)
      location.reload()
    })
  }
}

const APP_CONTAINER = document.querySelector('#app')
const storageName = localStorage.getItem('user_name')
const storageAge = localStorage.getItem('user_age')
const formName = 'user_form'
const formBtnName = 'submit'
const ageLimit = 18

generatePageContent(APP_CONTAINER, formName)
