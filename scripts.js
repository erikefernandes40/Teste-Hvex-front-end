import Usuario from './usuario.js'

function logar(){
    let email= document.querySelector('#email').value
    let senha = document.querySelector('senha').value
    let corfirmarSenha = document.querySelector('#confirmarSenha').value
    let submitBUtton = document.querySelector('#button')

    submitBUtton.addEventListener("click", function(e){
        e.preventDefault()
    })

    if(email == Usuario.usuarios[0].email && senha == Usuario.usuarios[0].senha){
        location.href = profile.html
    }else{
        alert('usuario ou senha invalidos')
    }


}


console.log(Usuario.usuarios[0].email)
