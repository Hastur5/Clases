import { useState, useEffect } from 'react'
import axios from 'axios';
import {Personaje} from "./Personaje"

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(()=>{
    axios.get("https://hey-arnold-api.herokuapp.com/api/v1/characters").then(response => {
        setPersonajes(response.data);
    })
  },[]);
  
  return (
    <div className="container">
      <div className=' grid-columns:      12;' md={1}>
        {
          personajes.map((personaje) => {
            return (<Personaje key={personaje._id} image={personaje.image} name={personaje.name}></Personaje>)
          })
        }
      </div>
    </div>
  )
}

export default App