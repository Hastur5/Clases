/**
 * BLOQUE 5 - Solución 3 Async Await
 */

//  console.log('============== BLOQUE 5 ==============')


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

// //Async por sí sólo no genera una función asíncrona. Necesita de la palabra await.
// async function main () { //Await no se puede usar sin la palabra async.
//     console.log('1.Presiona el botón de comprar')
//     try{
//         await validatePaymentPromise()
//         //await otraPromise()
//         // const callApi = await callOtherApi()
//         // const pokemones = await callApi.json()
//         // console.log('pokemones',pokemones)
//         console.log('3.Gracias joven')
//         console.log('4.Se entregará el paquete pronto"')
//     } catch (error){
//         console.log('error: ', error)
//     }
//     console.log('============== FINAL ==============')
//     console.log('============== FINAL 2 =============')
// }

// main()

let pokemones;
const validApiPokemones= () => {
    //return new Promise((resolve, reject)=>{
        //setTimeout(() => {
            console.log('2- Validando la api');

           return fetch("https://pokeapi.co/api/v2/pokemon/ditto21")
            // .then(response => response.json())
            // .then((data) => {
            //     pokemones = data;
            //     console.log('2 pokemones: ', pokemones); 
            //     resolve('ok');
            // })
            // .catch(error =>{
            //     reject('error');
            // });

        //}, 0);
   // });
 }


async function main(){
    console.log('1 loading information..');
    try{
        const response = await validApiPokemones();
        const pokemones= await response.json();
        console.log('2 pokemones: ', pokemones); 
        }
    catch (error){
        console.log('ERROR: ' + error);
    }
    console.log('3 final: ');
}

main()

