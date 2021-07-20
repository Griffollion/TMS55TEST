const name = document.querySelector('.name')
const password = document.querySelector('.password')
document.addEventListener('input', () => {
    document.querySelector('.out__name').innerHTML = name.value
    document.querySelector('.out__password').innerHTML = password.value
})    
