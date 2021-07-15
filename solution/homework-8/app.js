"use strict";

// function sliderStateChange(selector) {
//      slideTest = document.querySelectorAll("#"+ selector.id + " .slider__slide");
//      tourTest = 'maxim programer'

//     // slides.forEach(slide => {
//     //             removeActiveClasses(slides, 'active')
//     //             slide.classList.add('active')

//         // })
//     }

const slides = document.querySelectorAll(".slider__slide");

slides.forEach((slide) => {
  slide.onclick = (e) => {
    const parentId = e.target.parentNode.parentNode.id;
    const slideTest = document.querySelectorAll(
      "#" + parentId + " .slider__slide"
    );
    removeActiveClasses(slideTest, "active");
    slide.classList.add("active");
  };
});

function removeActiveClasses(items, clsName) {
  items.forEach((item) => {
    item.classList.remove(clsName);
  });
}

// slides.forEach(slide => {
//     slide.addEventListener('click', () => {
//     const varTest = slideTest
//     console.log(slideTest)
//             removeActiveClasses(varTest, 'active')
//             slide.classList.add('active')

//     })
// })

// const slides1 = document.querySelectorAll("#slider-1 .slider__slide");
// slides1.forEach((slide) => {
//   slide.addEventListener("click", () => {
//     removeActiveClasses(slides1, "active");
//     slide.classList.add("active");
//   });
// });
// const slides2 = document.querySelectorAll("#slider-2 .slider__slide");
// slides2.forEach((slide) => {
//   slide.addEventListener("click", () => {
//     removeActiveClasses(slides2, "active");
//     slide.classList.add("active");
//   });
// });

// const slides3 = document.querySelectorAll("#slider-3 .slider__slide");
// slides3.forEach((slide) => {
//   slide.addEventListener("click", () => {
//     removeActiveClasses(slides3, "active");
//     slide.classList.add("active");
//   });
// });
