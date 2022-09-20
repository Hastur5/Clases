const formulario = document.getElementById('formulario')
const texto = document.getElementById('texto')
const button = document.getElementById('button')

const arrayColors = ["azul", "amarillo", "rojo"]

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
	formulario.classList.add(selectColor())
	texto.classList.add(selectColor())
})

function selectColor(){
	var rand = ~~(Math.random()*arrayColors.length);
	var color = arrayColors[rand];
	return color
}