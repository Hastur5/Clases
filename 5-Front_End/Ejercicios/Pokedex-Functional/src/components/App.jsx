import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import {Pokemon} from './Pokemon';

function App() {
  const [ pokemones, setPokemones] = useState([]);

  useEffect(() => {

     axios
     .get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
     .then(response => {
      setPokemones(response.data);
     })
  

  },[]);

  console.log(pokemones)

  //el array vacio de arriba se agrega para evitar que la funcion se siga ejecutando.

  return (
    <div className="column">
     <div className="columns is-mobile is-multiline is-centered">
      {
        pokemones.map((pokemon) => {
          return (<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>)
        })
      }
     </div>
    </div>
  )
}

export default App
