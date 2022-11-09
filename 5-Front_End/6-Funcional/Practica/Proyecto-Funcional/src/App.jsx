import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Dashboard from './components/Dashboard'

const App = () => {

  //1. estados
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  //variables de tipo boleanos es buena práctica que lleven el isAntes.

  const [credentials, setCredentials] = useState({})
  const [isUserActive, setisUserActive] = useState(false)

  const USER_HARDCODE = 'userG18'
  const PASSWORD_HARDCODE = '12345'

  //2. userEffects
  //Primero se pone el callback y al final el estado que se quiere escuchar.
  useEffect(() => {
    console.log('nuevo valor', credentials)
  }, [credentials])

  //3. funciones            //destructuring
  const handleInputValue = ({target: { value, name }}) =>{

    //name === 'user' ? setUser(value) : setPassword(value)
    // console.log('valor', value);
    // if(name === 'user') {
    //   setUser(value);
    // } else{
    //   setPassword(value)
    // }
    // //el destructuring recortó esto:
    // const handleInputValue = (e) => {
    //  console.log('valor', e.target.value)
    //}
    // "..."" hace una copia del objeto
    setCredentials({...credentials, [name]: value})
  };

  const submitForm = () => {
    //simular petición al backend
    if(credentials.user === USER_HARDCODE && credentials.password === PASSWORD_HARDCODE){
      console.log('login exitoso')
      setisUserActive(true)

      return <h3>Login exitoso</h3>
    } else{
      console.log('no pasa')
    }
    // user === USER_HARDCODE && password === PASSWORD_HARDCODE
    // ? alert('acceso concedido')
    // : alert('Datos incorrectos')
    
    // const objectLogin = { email: user, password }
    
    //   const result = await axios.post(
    //     'https://ecomerce-master.herokuapp.com/api/v1/login',
    //     objectLogin
    //     );
    //   console.log('result', result)
  };

  return (
    <div className="App">

      {isUserActive ? (
        <Dashboard logout={() => setisUserActive(false)}/> 
      ) : (
        <>
          <h3>Login app Fake </h3>
          <div>

            <div style={{margin:10}}>
              <label htmlFor="">Usuario</label>
              <input 
                type="text"
                name='user'
                value={credentials.user || ''}
                onChange={handleInputValue}
              />
            </div>

            <div style={{margin:10}}>
              <label htmlFor="">Password</label>
              <input 
                type="password"
                name='password'
                value={credentials.password || ''} 
                onChange={handleInputValue}
              />
            </div>

            <button onClick={() => submitForm()}>Enviar</button>

            </div>
          </>
        )}
    </div>
  )
}

export default App


