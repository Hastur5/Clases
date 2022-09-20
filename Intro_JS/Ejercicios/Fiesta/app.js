/* Dejar pasar sólo a los mayores de edad.
La primer persona que entre desués de las 2 AM, no paga. */ 


//Primer Paso: Definir las variables
nombre = prompt("¿Cuál es tu nombre?")
const edadPermitida = 18
const mesEnCurso = 06
//Segundo Paso: Solicitar los datos
//Tercer Paso: Desarrollo de la logica

function año (añoActual,añoDeNacimiento){
    
  let res = añoActual - añoDeNacimiento
  // return res

}

// function mes (mesAactual, mesDeNacimiento){

//   let res = mesAactual - mesDeNacimiento
//   // return res

// }

let resAño = año (Number(prompt(`${nombre} ingresa tu año de nacimiento.`,2022)))
// let resMes = mes (06,Number(prompt(`${nombre} ingresa tu mes de nacimiento con números.`)))
let resMes = Number(prompt(`${nombre} ingresa tu mes de nacimiento con números.`))


if (resAño < edadPermitida && resMes > 06){
  alert(`${nombre}, lo sentimos,  no tienes la edad suficiente para perriar`)
}

else{
  alert(`${nombre} puedes entrar`)}



