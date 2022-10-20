const formulario = document.getElementById('formulario')
const btn = document.getElementById('btn')
const div = document.getElementById('fili')

formulario.addEventListener('submit',evento => {
    console.log('El filis')
    evento.preventDefault()
    const newDiv = document.createElement('div') //aquí definí que ese new div, iba a meter un div.
    newDiv.innerHTML = `Hola soy un cuadrito` //aquí dije qué iba a contener ese div.
    div.appendChild(newDiv) //y aquí metí el nuevo div.
})


// addEventListener( Aquí va primero el tipo de evento a escuchar , Y el objeto que recibe el evento. {

//     Lo que sucede.
// })