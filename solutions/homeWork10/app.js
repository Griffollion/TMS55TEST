//Задание 47 часть 1 

document.querySelector('.name').addEventListener('input',()=>{
    let data = document.querySelector('.name').value
    document.querySelector('.out-name').innerHTML = data
})
document.querySelector('.password').addEventListener('input',()=>{
    let data = document.querySelector('.password').value
    document.querySelector('.out-password').innerHTML = data
})


