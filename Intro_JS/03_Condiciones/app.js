// 1) Crear app que reciba datos del usuario y valide el usuario y password
// hacer una validacion donde si la password y el correo ingresados por el usuario coinciden con lo que tenemos
// registrado en sistema le muestre un alert que diga "Bienvenido a tu cuenta"
// Pero si los datos ingresados por el usuario no coinciden mostrar un alert que diga "Tus datos son incorrectos"



// let valorUsuario = prompt('Ingresa tu nombre de usuario.');
// let valorPassword = prompt('Ingresa tu password.');


// let usuario = "mau";
// let password = "fili";


// if(valorUsuario == usuario && valorPassword == password){

//     alert("Bienvenido a tu perfil")
// }

// else{
//     alert('Tu usuario o contraseña no es correcta.');
// }


// 2) Crear un app que reciba 3 datos de parte del usuario, el nombre, la edad y examen de la vista
// Hacer una validacion para saber si el usuario es mayor de 18 y aprobo el examen de la vista, si pasa esta validacion mostrarle
// un mensaje que diga 'Felicidades nombre, obtuviste tu licencia' 
// Pero si no se cumple la condicion mostrarle un mensaje que diga que no obtuvo su licencia de conducir'

// let usuario = prompt('Ingresa tu nombre de usuario.')
// let edad = prompt('¿Cuál es tu edad?')
// let vista = prompt('¿Aprobaste el examen de la vista? Responde sí o no.')

// if(edad >= 18 && vista == ("si" || "Si"|| "sí"|| "Sí")){
//     alert(`Felicidades ${usuario}, obtuviste tu licencia`)
// }

// else{
//     alert(`Lo sentimos, ${usuario}, no obtuviste tu licencia`)
// }

// Crear un programa para evaluar si tenemos covid
// 1.- Solicitar al usuario si tiene los siguientes sintomas
// a.- dolor de cabeza
// b.- Dificultad para respirar
// c.- temperatura mayor a 37grados
// d.- Dolor de cuerpo
// e.- Si tengo vacunas aplicadas
// 2 a- Debo evaluar si  tengo 3 de los sintomas
// (dolor de cabeza, disficultad al respirar, temperatura)
// y no tengo vacunas tengo un 70% de tener covid
// 2,b Si presento 3 sintomas y tengo mis vacunas tendre un 40% de tener covid
//2.c - si presento todos los sintomas pues tengo 100% aunque tenga las vacunas

let nombre = prompt('Ingresa tu nombre.').toLocaleLowerCase()
let cabeza = prompt(`${nombre} ¿presentas dolor de cabeza?`).toLocaleLowerCase()
let respirar = prompt(`${nombre} ¿tienes dificultad para respirar?`).toLocaleLowerCase()
let temperatura = prompt(`${nombre} ¿tu temperatura es mayor a los 37 grados?`).toLocaleLowerCase()
let cuerpo = prompt(`${nombre} ¿presentas dolor en el cuerpo?`).toLocaleLowerCase()
let vacunas = prompt(`${nombre} ¿Cuentas con vacunas aplicadas?`).toLocaleLowerCase()
let sintomas = 0


// if(((cabeza == ("si" || "Si" || "sí" || "Sí")) && (respirar == ("si" || "Si" || "sí" || "Sí")) && (temperatura == ("si" || "Si" || "sí" || "Sí")) && (cuerpo == ("si" || "Si" || "sí" || "Sí")))){
//     alert(`${nombre} tienes el 100% de tener covid`)
// }

// else if(((cabeza == ("si" || "Si" || "sí" || "Sí")) && (respirar == ("si" || "Si" || "sí" || "Sí")) && (temperatura == ("si" || "Si" || "sí" || "Sí")) && (vacunas == ("no" || "No")))){
//     alert(`${nombre} tienes el 70% de tener covid`)
// }

// else if((cabeza == ("si" || "Si" || "sí" || "Sí")) && (respirar == ("si" || "Si" || "sí" || "Sí")) && (temperatura == ("si" || "Si" || "sí" || "Sí")) && (vacunas == ("si" || "Si" || "sí" || "Sí"))){
//     alert(`${nombre} tienes 40% de tener covid`)
// }

// else {
//     alert(`${nombre} se necesita más información.`)
// }


if(cabeza == "si"){
    sintomas = sintomas + 1
}

if(respirar == "si"){
    sintomas = sintomas + 1
}

if(temperatura == "si"){
    sintomas = sintomas + 1
}

if(cuerpo == "si"){
    sintomas = sintomas + 1
}

if(sintomas == 4){
    alert(`${nombre} tienes covicho.`)
}

else if(sintomas == 3 && vacunas == "no"){
    alert(`${nombre} tienes el 70% de tener covicho.`)
}

else if(sintomas == 3 && vacunas == "si"){
    alert(`${nombre} tienes el 40% de tener covicho.`)
}

else{
    alert(`${nombre} se necesita más info.`)
}