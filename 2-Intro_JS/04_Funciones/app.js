// Función:

// ¿Qué es? -  Es un bloque de código que realiza una tarea en específico.
// ¿Para qué sirve? = 1. Reutilizar código. 2. Estructurar mejor nuestro código.

// Las funciones puede recibir parámetros.
// ¿qué son los parámetros? => Son valores, que utilizaremos para que la función realice su tarea.
// Una función puede retonar valores.










// function saludar (nombre) {
//     console.log("Hola"+" "+"nombre");
// }

// saludar("Maria");


// const suma = function (primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }

// console.log(suma(4,4));

// function Saludar (nombre, edad){
//     console.log (`Hola ${nombre}, bienvenido a la clase. Felices ${edad}`)
// }

// Saludar('KarmenWarrenLSonLibertadBurgir', 28)

// function Saludar(nombre,edad){
//     let userName = nombre
//     let userAge = edad

//     function PintarDatos(dato1,dato2){

//         console.log(dato1,dato2)
//     }
    
//     PintarDatos(userName, userAge)
    
// }

// Saludar('Karmen', 28)

// function Saludar(nombre,edad){
//     let userName = nombre
//     let userAge = edad
//     return (`Bienvenida ${username}, felices ${userAge}`)
// }

// const saluda = Saludar('Karmen', 28)

// function Numero1(numero, nombre){
//     console.log(numero, nombre)
//     return(numero)
// }

// function Numero2(numero, nombre){
//     console.log(numero, nombre)
//     return(numero)
// }

// var sumar = Numero1 (10, 'Fili') + Numero2 (20,'Skip')

// console.log(sumar)

// function nameFunction(){
//     console.log('Función Tradicional')
// }

// const myFunction = function (){
//     console.log('Función Anónima')
// }

// const arrowFunction = () => {
//    setInterval(() => console.log('Arrow Function'), 5000)
// }





// Crear archivo HTML y conectarlo con nuestro archivo JS
// Crear 5 prompts que cada uno reciba una calificacion, un total de 5 calificaciones
// convertir los prompts a tipo number 
// Crear una funcion que reciba por parametro las 5 calificaciones y 
// Calcule el promedio de esas notas.
// Cuando tengamos el promedio vamos a validar lo siguiente:
// Si el promedio es igual a 10 vamos a retonar un mensaje para felicitar al alumno
// si el promedio es mayor que 8 vamos a retornar un mensaje que diga "Casi, casi"
// Si el promedio es mayor que 6 pero menor que 8, retornamos mensaje que diga "Hay que ponerle mas ganas"
// Si el resultado es menor que 6 retornamos mensaje que diga "No pasaste el grado"




// let nombre = prompt('¿Cuál es el nombre del alumno?')
// let a = parseFloat(prompt('¿Cuál es la primera calificación?'))
// let b = parseFloat(prompt('¿Cuál es la segunda calificación?'))
// let c = parseFloat(prompt('¿Cuál es la tercera calificación?'))
// let d = parseFloat(prompt('¿Cuál es la cuarta calificación?'))
// let e = parseFloat(prompt('¿Cuál es la quinta calificación?'))

// function suma (n1,n2,n3,n4,n5) {
//     let resultado = (n1 + n2 + n3 +n4 + n5) / 5
    
//     if (resultado == 10){
//         alert(`Felicidades ${nombre}, tienes 10 de promedio`) 
//     }
    
//     else if(resultado >= 8 ){
//         alert(`Casi casi ${nombre}, tienes ${resultado} de promedio`)
//     }
    
//     else if (resultado <= 6 && resultado < 8){
//         alert(`Échale ganas ${nombre}, tienes ${resultado} de promedio`)
//     }
    
//     else {alert(`No la armaste, ${nombre}, tienes ${resultado} de promedio`)}
    
// }

// suma(a,b,c,d,e)


// Realizar un programa que calcule el área de un Círculo y Cuadrado.
// Radio 5 y lado 25
// Mínimo deben de tener 3 funciones (círculo, cuadrado y resultado)

const pi = 3.1416

function Circulo (){
    let radio = Number(prompt('Ingresa el radio del círculo'))
    let resultadoCir = (radio * radio) * pi
    console.log(resultadoCir)
    resultado(resultadoCir)
}


function Cuadrado(){
    let lado = Number(prompt('Ingresa el lado del cuadrado'))
    let resultadoCua = lado * 2
    console.log(resultadoCua)
    resultado(resultadoCua)
}


function resultado (area){
    document.write(area + '<br/>')
    
}


Cuadrado()
Circulo()