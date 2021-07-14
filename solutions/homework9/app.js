'use strict'
function removeActiveClasses(arr, clsName) {
  arr.forEach((item) => {
    item.classList.remove(clsName)
  })
}

var idAttr = ['slider1', 'slider2', 'slider3']
idAttr.forEach((key) => addListeners(key))

function addListeners(key) {
  var slides = document.querySelectorAll('#' + key + ' > .slider__slide')
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      removeActiveClasses(slides, 'active')
      slide.classList.add('active')
    })
  })
}
