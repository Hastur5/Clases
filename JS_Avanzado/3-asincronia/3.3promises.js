/**
 * BLOQUE 4 - Solución 2 Promises (pending, resolve y reject)
 */

// console.log('============== BLOQUE 4 ==============')


//  const validatePaymentPromise = () => {
    
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2.Validando la tarjeta')
            
//             const statusArray = [200, 500]
//             const randomResponse = statusArray[Math.floor(Math.random() 
//             * statusArray.length)]
//             if (randomResponse === 200){
//                 // 200 ok
//                 resolve('todo gucci!')
//             } else {
//                 //500 Internal Server Error
//                 reject('tu tarjeta fue declinada :(')
//             }
//         }, 0)
//     })
    
// }

//  console.log('1.Presiona el botón de comprar')
//  validatePaymentPromise()
//     .then(response => { //then se ejecuta cuando lo último que vea en el código sea un resolve. 
//         console.log(response)
//          console.log('3.Ver el mensaje de "gracias joven"')
//     })
//     .then(() => {
//         console.log('4.Se entregará el paquete pronto"')
//    })
//     .catch((error) => { //catch se va a ejecutar si lo último que hay en el código es un reject.
//         console.log('error: ', error)
//     })
//     .finally(() => { //finally se ejecuta siempre.
//         console.log('============== FINAL 2 ==============')
//     })
//     console.log('============== FINAL  =============')

const fetch = require('node-fetch')

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
                resolve('ok');
            })
            .catch(error =>{
                reject('error');
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
