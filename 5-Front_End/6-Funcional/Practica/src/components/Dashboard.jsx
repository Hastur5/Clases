import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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
            <Button variant="outlined #d50000" onClick={() => logout()}>
                LogOut
            </Button>
        <h5>Lista de Personajes</h5>
        <Grid container spacing={{ xs: 3, md: 3 }}>
            {charactersArray.map( (element, i) => (
                <Grid item xs={6} md= {3} key={i}>
                    <Card variant="outlined">
                        <p> Name: {element.name}</p>
                        <p> Height: {element.height}</p>
                        <p> Hair color: {element.hair_color}</p>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
  );
}

// (!charactersArray.length?(   Esto sirve para validar si está llegando info. Si es 0, muestra el componente de abajo. Si no, entonces píntalos.
// Valores truhdy and falsy
//     <CircularProgress color='secondary'/>
// ) : (

// )
// )
