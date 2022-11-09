import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';

export default function Dashboard({ logout }) {  //es igual que como si estuvieramos definiendo props.logout. Es desctructuring porque sólo estamos trabajando con un elemento.

    const [charactersArray, setcharactersArray] = useState([])

    //Al cargar mi componente comsumir la API X

    useEffect(() => {

        async function fetchApi () {
            const BASE_URL = 'https://swapi.dev/api/'
            try{
                const {
                    data: { results }
                } = await axios.get(`${BASE_URL}people`);
                console.log('result', results);
                setcharactersArray(results);
                //guardar e iterarlo
            } catch(error) {
                console.log('error', error)
            }
        }

        fetchApi()

        //PROMESA THEN CATCH axios.get(`${BASE_URL}people`).then().catch()
    
    }, []);

    useEffect(() => {
        console.log('cambia estado', charactersArray)
    }, [charactersArray])
    

  return (
    <>
        <h4>Dashboard</h4>
        {/* generalmente aquí va props.logout, pero como rn la línea 4 se hizo destructuring, entonces se quita también el props. */}
        <Button variant="outlined" onClick={() => logout()}>
            LogOut
        </Button>
        <h5>Lista de Personajes</h5>
        {charactersArray.map( (element, i) => (
            <div key={i}>
                <p> Name: {element.name}</p>
                <p> Height: {element.height}</p>
                <p> Hair color: {element.hair_color}</p>
            </div>
        ) )}
    </>
  );
}
