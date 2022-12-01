// usePArams sirve para crear una ruta dinámica :pid
import { useParams } from 'react-router-dom'
const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS.' },
    { id: 2, nombre: 'Cajero', desc: 'Simulador de cajero automático con HTML.' },
    { id: 3, nombre: 'Lol', desc: 'Consumir una Api y mostrar el listado con HTML, CSS y JS.' }
  ]

  const { pid } = useParams()

  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <p>Descripción: {proyectos[pid - 1].desc} </p>
    </>
  )
}

export default PortafolioDetalle
