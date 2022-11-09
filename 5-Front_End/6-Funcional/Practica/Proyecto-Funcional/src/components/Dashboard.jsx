import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Dashboard(props) {

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
        <button onClick={() => props.logout()}>LogOut</button>
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
