// usePArams sirve para crear una ruta dinámica :pid
// useNavigate me permite cambiar la ruta de forma programática, es decir, usarla en alguna función de JS
import { useParams, useNavigate } from 'react-router-dom'
const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS.' },
    { id: 2, nombre: 'Cajero', desc: 'Simulador de cajero automático con HTML.' },
    { id: 3, nombre: 'Lol', desc: 'Consumir una Api y mostrar el listado con HTML, CSS y JS.' }
  ]

  const { pid } = useParams() // Tiene el valor que yo le mando en ruta.
  const navigate = useNavigate() // Para  cambiar de ruta programáticamente.

  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <p>Descripción: {proyectos[pid - 1].desc} </p>

      <button onClick={() => {
        navigate('/portafolio')
      }}
      >Nos vamos al portafolio
      </button>
    </>
  )
}

export default PortafolioDetalle
