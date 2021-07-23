'use strict'


function enterSomething (from, to){
document.querySelector(from).oninput = () =>{
    let target = document.querySelector(from).value
    document.querySelector(to).innerText = target
}
}

enterSomething('#inp_name', '.div-one')
enterSomething('#inp_password', '.div-two')