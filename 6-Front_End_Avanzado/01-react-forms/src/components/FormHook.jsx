// En este utulizamos varios valores con sólo un estado.
import { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

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
  useEffect(() => {
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

  const sendData = (data) => {
    if (data.apellido !== '') {
      console.log('Send data', data)
    }
  }

  // Paso 3: Uso de mi custom Hook de useForm.
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value={input.nombre} onChange={handleInputChange} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value={input.edad} onChange={handleInputChange} />

          <label htmlFor='genero'>Género</label>
          <select name='genero' id='genero'>
            <option value=''>Elige un género</option>
            <option value='M'>Másculino</option>
            <option value='F'>Fémenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' value={input.email} onChange={handleInputChange} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='password' id='password' value={input.password} onChange={handleInputChange} />

          <button type='submit'>
            Inicio de Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
