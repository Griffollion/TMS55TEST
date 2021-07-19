function validateName (elem) {
    elem.className = ""
    if (elem.value) {
        elem.classList.add('valid')
    } else {
        elem.classList.add('invalid')
    }
}

function validatePass (elem) {
    if (elem.value.length > 5) {
        elem.classList.add('valid')
    } else {
        elem.classList.add('invalid')
    }
}