import axios from 'axios'
import React, {useEffect} from 'react'

export default function Dashboard() {

    //Al cargar mi componente comsumir la API X

    useEffect(() => {

        async function fetchApi () {
            const BASE_URL = 'https://swapi.dev/api/'
            try{
                const result = await axios.get(`${BASE_URL}people`)
                console.log('result', result)
            } catch(error) {
                console.log('error', error)
            }
        }

        fetchApi()

        //PROMESA THEN CATCH axios.get(`${BASE_URL}people`).then().catch()
    
    }, [])
    

  return (
    <>
        <div>Dashboard</div>
        <h4>Bienvenido</h4>
    </>
  )
}
