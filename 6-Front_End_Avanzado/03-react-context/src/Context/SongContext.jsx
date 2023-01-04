// Context tiene que ver con el manejo de estado globales de React, es decir, que nosotros podemos compartir la MISMA información entre diferentes niveles de componentes.
// Context está disponible a partir de la versión 16 de React. Y para usar context necesitamos seguir una serie de pasos

import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// Para usar context, necesitamos seguir una serie de pasos.

// 1. Creación del contexto vacío.
const SongContext = createContext()

// 2. Vamos a crear el Componente Proveedor del contexto, es decir, maneja de dónde se obtiene y cómo pasa la información.

function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones.
  const [loading, setLoading] = useState(true)// Ya se cargó la info (loader)
  const [selectedSong, setSelectedSong] = useState({}) // Información de la canción seleccionada.
  const [search, setSearch] = useState('')

  // Simulo una llamada a la API de la lista de canciones.
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// 3 Consumidor del contexto
// Brinda acceso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// 4 Exportar las funciones del Provider y el Consumer.
// Para que puedan ser invocados en nuestros componentes.
export {
  SongProvider,
  useSongContext
}

// Uso de context
// 5 Debemos de ir al componente superior (por ejemplo Home) y envolver a los componentes que necesitan la información del contexto.
