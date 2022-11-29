// Reglas para crear un Hook de React.
// Custom Hook es una fución que va a utilizar otros hooks de React.
// 1. Siempre deben de ser funciones (apartir de React v16 usamos hooks).
// 2. Siempre debe de usar al menos un Hook de React (useState, useEffect, useRef, etc.).
// 3. Siempre debemos usar la palabra 'use' al nombrar el archivo.
// 4. Deben ser reutilizables, es decir, que no son para casos específicos.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estados únicos para guardar los datos de mi formulario en un objeto.
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto.
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  // Función que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Función que se ejecuta al enviar un form
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
