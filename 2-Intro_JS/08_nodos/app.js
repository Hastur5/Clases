const titulo = document.getElementById('titulo')
titulo.innerHTML = 'Ingresa tu info.'
const formulario = document.getElementById('formulario')


const validar = (user, password) =>{
    let usuario ='Mau'
    let psw = 'fili'

    if(user === '' || password === ''){
        console.log('ingresa tus datos')
        showErrors('errorBtn')
    }
    else if(user === usuario && password === psw){
        console.log('Bienvenido')
    }
    else if(user !== usuario){
        console.log('ingresaste mal tu usuario')
        showErrors('errorUser')
    }
    else if(password !== psw){
        console.log('Ingresaste mal el password')
        showErrors('errorPassword')
    }
    else{
        console.log('completa el login')
    }
}


const showErrors = (string) =>{
    let errorUser = document.getElementById('errorUser')
    let errorPassword = document.getElementById('errorPassword')
    let errorBtn = document.getElementById('errorBtn')


    if(string === 'errorUser'){
        errorUser.classList.remove('hide')
        errorUser.classList.add('error')
        setTimeout(()=>{
            errorUser.classList.remove('error')
            errorUser.classList.add('hide')
        }, 4000)
    }
    else if (string === 'errorPassword'){
        errorPassword.classList.remove('hide')
        errorPassword.classList.add('error')
        setTimeout(()=>{
            errorPassword.classList.remove('error')
            errorPassword.classList.add('hide')
        },4000)
    }
    else if(string === 'errorBtn'){
        errorBtn.classList.remove('hide')
        errorBtn.classList.add('errorBtn')
        setTimeout(()=>{
            errorBtn.classList.remove('errorBtn')
            errorBtn.classList.add('hide')
        }, 4000)
    }
}

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    validar(user,password)
})
