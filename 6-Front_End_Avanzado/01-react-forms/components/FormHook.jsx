import { useState, useEffect } from 'react'

export const FormHook = () => {
  // Paso 1: Crear un único estado con toda la info en forma de objeto
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  // Paso 2: Voy a simular traer datos de una API y prerellenar el formulario.
  useEffect: (() => {
    setTimeout(() => {
      const info = {
        nombre: 'Fili',
        apellido: 'Filo',
        edad: 6,
        genero: 'M',
        email: 'fili@fili.com',
        password: 'filis'
      }
      setDatos(info)
    }, 5000)
  }, [])

  return (
    <div>FormHook</div>
  )
}

export default FormHook
