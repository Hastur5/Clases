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

const formulario = document.getElementById('formulario')
const name = document.getElementById('name').value
console.log('name')
const cabeza = document.getElementById('cabeza')
const respirar = document.getElementById('respirar')
const temperatura = document.getElementById('temperatura')
const cuerpo = document.getElementById('cuerpo')
const vacunas = document.getElementById('vacunas')

formulario.addEventListener('submit',evento => {
    console.log('El filis')
    evento.preventDefault()
    let sintomas = 0

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
        alert(`${name} tienes covicho.`)
    }
    
    else if(sintomas == 3 && vacunas == "no"){
        alert(`${name} tienes el 70% de tener covicho.`)
    }
    
    else if(sintomas == 3 && vacunas == "si"){
        alert(`${name} tienes el 40% de tener covicho.`)
    }
    
    else{
        alert(`${name} se necesita más info.`)
    }
    
    
    // const newDiv = document.createElement('div') //aquí definí que ese new div, iba a meter un div.
    // newDiv.innerHTML = `Hola soy un cuadrito` //aquí dije qué iba a contener ese div.
    // div.appendChild(newDiv) //y aquí metí el nuevo div.
})
