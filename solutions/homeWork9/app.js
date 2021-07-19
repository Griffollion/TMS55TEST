function removeActiveClasses(items, clsName) {
    items.forEach(item => {
        item.classList.remove(clsName)
    })
} 

const id = ('#first_slider .slider__slide')
const id1 = ('#second__slider .slider__slide')
const id2 = ('#third__slider .slider__slide')

function choiceSlider (id) {
    const slides = document.querySelectorAll(id)
    slides.forEach(slide => {
    slide.addEventListener('click',() => {
        removeActiveClasses(slides, 'active')
        slide.classList.add('active')
    })
})
}

choiceSlider(id)
choiceSlider(id1)
choiceSlider(id2)