const button = document.getElementById('button') //Así definimos y seleccionamos nuestro contenido de html.

button.textContent = 'Pícame' //Aquí no se puede meter etiquetas.
button.innerHTML = '<div>Hazme click de nuevo</div><br>' //Aquí sí se pueden meter etiquetas.

button.classList.add('fili') //agrega una clase en el html.


const skip = document.querySelector('#skip')

console.log('skip')

const li = document.createElement ('li')  //crea una etiqueta justo para html.

li.textContent = 'primer elemento' //crea el texto para la etiqueta.

skip.appendChild(li) //añade el elemento creado como un hijo en la caja del ID creado

const fili = document.getElementById('fili')

console.log('fili')

fili.innerHTML = '<button>Clickea</button>' //Es necesario que la etiqueta a la que vamos a agregarle algo, ya tenga un contenido. Porque lo que hace Inner es cambiarlo, no agregar.

let perros = ['fili', 'skip', 'volcan', 'chrono']

perros.forEach(function(){
    console.log(perros)
})  //así recorrío todo el array 4 veces. Una por cada elemento.

let olis = ['fili', 'skip', 'volcan', 'chrono']

olis.forEach(function(oli){
    console.log(oli)
}) //así lo recorrió uno por uno, una sola vez. Al parecer, al meterlo singular, el mismo js detecta que lo queremos uno por uno.

const canes = ['filipson', 'skipson', 'volcanson', 'chronoson']

canes.forEach(item => {
    console.log(item)
    const li = document.createElement ('li')
    li.textContent = item
    fili.appendChild(li)
}) //con función flecha.



// button.addEventListener('submit',(evento)=>{
//     evento.preventDefault()
//     let div = document.createElement('div')
//     div.innerHTML = "<div> Hola soy un cuadrito </div>"
//     console.log(document.getElementById('button'));
//     // let div = document.createElement('div')

//     // div.classList.add('center')
//     // div.innerHTML="<div>Hola soy cuadrito</div>"
// })


