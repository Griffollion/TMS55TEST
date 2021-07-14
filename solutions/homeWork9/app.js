function removeActiveClasses(items, clsName) {
    items.forEach(item => {
        item.classList.remove(clsName)
    })
} 

const id = '#first_slider'
const id1 = '#second__slider'
const id2 = '#third__slider'

function getIdName (id) {
    const slides = document.querySelectorAll(id)
    slides.forEach(slide => {
    slide.addEventListener('click',() => {
        removeActiveClasses(slides, 'active')
        slide.classList.add('active')
    })
})
}

getIdName(id)
getIdName(id1)
getIdName(id2)