const fetch = require("node-fetch")

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