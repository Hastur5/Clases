/**
 *  BLOQUE 3 - Solución 1 Callbacks
 * Un callback es una función que pasamos como parámetro a otra función, 
 * con el fin de ejecutar la función que se pasa como parámetro en el 
 * momento que queramos.
 * NOTA: No es una buena práctica utilizar callbacks porque se van anidando
 * y el código se vuelve ilegible.
 */

console.log('============== BLOQUE 3 ==============')

const showSuccessMessage = () => {
    console.log('3.Ver el mensaje de "gracias joven"')
}
 
const validatePayment = (showSuccessMessage) =>{
    setTimeout(() => {
        console.log('2.Validando la tarjeta')
        showSuccessMessage()
    },0)
}

 console.log('1.Presiona el botón de comprar')
 validatePayment(showSuccessMessage)




 console.log('------------API POKEMON PROMISES THEN CATCH -----------------');
let pokemones;

const validApiPokemones= () => {
    //return new Promise((resolve, reject)=>{
        //setTimeout(() => {
            console.log('2- Validando la api');

            return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then((data) => {
                pokemones = data;
                console.log('2 pokemones: ', pokemones); 
                //resolve('ok');
            })
            .catch(error =>{
               // reject('error');
            });
        //}, 0);
   // });
 }

 console.log('1 loading information..**'); 
 validApiPokemones();

//validApiPokemones()
//.then(response => {
//     console.log(response);
// })
// .catch((error)=>{
//     console.log('ERROR: ' + error);
// })
// .finally(()=>{
//     console.log('3 final: ');
// });