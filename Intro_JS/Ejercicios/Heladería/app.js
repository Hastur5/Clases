/*Ingresar el monto y mostrar el helado más caro.
Si hay 2 o más, mostrar ambos.
Indicar el cambio*/

//Primer Paso: Definir las variables
// let Roberto = 1.5;
// let Pedro = 1.7;
// let Cofla = 3;

let pote = 2.9;
let potecito = 2.9;
let helardo = 1.8;
let heladovich = 1.7;
let heladix = 1.6;
let palitoCrema = 1;
let palitoAgua = .6;



//Segundo Paso: Solicitar los datos

dinero = prompt('¿Cuánto dinero tienes?');

//Tercer Paso: Desarrollo de la logica
if (dinero >= pote && potecito) {
    
    cambio = dinero % 2.9;

    alert(`Puedes comprar Pote de 1/4 o un potecito de helado. Tu cambio es de: ${cambio}`)
    
}
else if(dinero >= helardo){

    cambio = dinero % 1.8;

    alert(`Puedes comprar un helardo. Tu cambio es de: ${cambio}`)
}

else if(dinero >= heladovich){

    cambio = dinero % 1.7;

    alert(`Puedes comprar heladovich. Tu cambio es de: ${cambio}`)
}

else if(dinero >= heladix){

    cambio = dinero % 1.6;

    alert(`Puedes comprar heladix. Tu cambio es de: ${cambio}`)
}

else if(dinero >= palitoCrema){

    cambio = dinero % 1;

    alert(`Puedes comprar palito de crema. Tu cambio es de: ${cambio}`)
}

else if(dinero >= palitoAgua){

    cambio = dinero % 0.6;

    alert(`Puedes comprar palito de agua. Tu cambio es de: ${cambio}`)
}

else{
    alert (`No puedes comprar nada.`)
}

//Cuarto Paso: Mostrar los resultados