'use strict'


document.querySelector('#inp_name').oninput = ()=>{
    let name = document.querySelector('#inp_name').value
    document.querySelector('.div-one').innerHTML = name;
}
document.querySelector('#inp_password').oninput = ()=>{
    let password = document.querySelector('#inp_password').value
    document.querySelector('.div-two').innerHTML = password;
}
