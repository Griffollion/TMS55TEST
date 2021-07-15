function removeActiveClasses(items,clsName) {
    items.forEach(item =>{
        item.classList.remove(clsName)
    })
}

const slides = document.querySelectorAll('.slider__slide')
slides.forEach(slide => {
    slide.addEventListener('click', (event) =>{
        let target = event.currentTarget.parentElement
        let activeSlides = target.querySelectorAll('.slider__slide')
         removeActiveClasses(activeSlides,'active')
        slide.classList.add('active')
    })
})

       

    


