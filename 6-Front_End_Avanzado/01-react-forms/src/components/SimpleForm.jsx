// Forma de crear un login sencillo o una app sencilla sin muchos estados.
import { useState } from 'react'
import logo from '../src/assets/react.svg'

const SimpleForm = () => {
  // Paso 1: Crear estados donde guardaremos la info tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    // Evito que se recargue la página y se rompa el SPA
    event.preventDefault()
    const submittedData = JSON.stringify(
      {
        email,
        password
      })
    console.log(submittedData)
  }

  // Paso 2: Crear el formulario con base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor='email'>Email</label>
          <input type='password' name='password' id='paswword' onChange={(event) => setPassword(event.target.value)} />
          <button onClick={handleSubmit}>
            Inicio de Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
