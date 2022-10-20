const formulario = document.getElementById('formulario')
const saldo = document.getElementById('saldo')
const btn = document.getElementById('btn')

const usuario = 'mau'
const contraseña = 'fili'
let monto = 900

const validar = (user,password) => {

    // let cuentas = [
    //     {
    //         'usuario':'mau',
    //         'contraseña': 'fili',
    //         'saldo' : 900 ,
    //     },
    //     {
    //         'usuario' : 'myrmir',
    //         'contraseña' : '123',
    //         'saldo' : 10,
    //     }
    // ]

    //cuentas[0].saldo + 44

    //console.log(cuentas[0].saldo)

    if (user === usuario  && password === contraseña ){
        const mensaje = document.createElement('div')
       formulario.appendChild(mensaje)
       formulario.innerHTML = `<div id="borrar" class="mensaje">Bienvenido ${usuario}</div>`
       let errorUser = document.getElementById('borrar')
       let operaciones = document.getElementById('operaciones')
        setTimeout(()=>{
            errorUser.classList.remove('mensaje')
            errorUser.classList.add('hide')
            const operaciones = document.createElement('div')
            formulario.appendChild(operaciones)
            formulario.innerHTML = `<div><button type="submit" id="saldo" class="boton">Consultar Saldo</button><button type="button" class="boton">Transferir</button><button type="button" class="boton">Retirar</button></div>`
        }, 2000)
    }

    else if((user !== usuario && password !== contraseña) || (user === '' || password === '')){
        const mensaje = document.createElement('div')
        formulario.appendChild(mensaje)
        formulario.innerHTML = `<div id="borrar" class="mensaje">Revisa tu información</div>`
        let errorUser = document.getElementById('borrar')
        setTimeout(()=>{
            errorUser.classList.remove('mensaje')
            errorUser.classList.add('hide')
            const reLogin = document.createElement('div')
            formulario.appendChild(reLogin)
            formulario.innerHTML = `<input type="text" placeholder="Ingresa tu usuario" id="user">
                                     <input type="password" placeholder="Ingresa tu contraseña" id="password">
                                     <button id="btn">Enviar</button>`
        }, 2000)
    } 
    else if(user !== usuario){
        const mensaje = document.createElement('div')
        formulario.appendChild(mensaje)
        formulario.innerHTML = `<div id="borrar" class="mensaje">Usuario no registrado</div>`
        let errorUser = document.getElementById('borrar')
        setTimeout(()=>{
            errorUser.classList.remove('mensaje')
            errorUser.classList.add('hide')
            const reLogin = document.createElement('div')
            formulario.appendChild(reLogin)
            formulario.innerHTML = `<input type="text" placeholder="Ingresa tu usuario" id="user">
                                     <input type="password" placeholder="Ingresa tu contraseña" id="password">
                                     <button id="btn">Enviar</button>`
        }, 2000)
    }
    else if(password !== contraseña){
        const mensaje = document.createElement('div')
        formulario.appendChild(mensaje)
        formulario.innerHTML = `<div id="borrar" class="mensaje">Contraseña incorrecta</div>`
        let errorUser = document.getElementById('borrar')
        setTimeout(()=>{
            errorUser.classList.remove('mensaje')
            errorUser.classList.add('hide')
            const reLogin = document.createElement('div')
            formulario.appendChild(reLogin)
            formulario.innerHTML = `<input type="text" placeholder="Ingresa tu usuario" id="user">
                                     <input type="password" placeholder="Ingresa tu contraseña" id="password">
                                     <button id="btn">Enviar</button>`
        }, 2000)
    }

    else{
        const mensaje = document.createElement('div')
        formulario.appendChild(mensaje)
        formulario.innerHTML = `<div id="borrar" class="mensaje">Completa el login</div>`
        let errorUser = document.getElementById('borrar')
        setTimeout(()=>{
            errorUser.classList.remove('mensaje')
            errorUser.classList.add('hide')
            const reLogin = document.createElement('div')
            formulario.appendChild(reLogin)
            formulario.innerHTML = `<input type="text" placeholder="Ingresa tu usuario" id="user">
                                     <input type="password" placeholder="Ingresa tu contraseña" id="password">
                                     <button id="btn">Enviar</button>`
        }, 2000)
    }

}


formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    console.log(password)
    validar(user,password)
})

// saldo.addEventListener('click', (evento)=>{
//     evento.preventDefault()
//     console.log('olis')
//     formulario.textContent = "${usuario} este es tu saldo ${monto}."
// })