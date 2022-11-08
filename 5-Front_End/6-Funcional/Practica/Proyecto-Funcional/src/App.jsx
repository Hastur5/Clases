import { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  //1. estados
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const USER_HARDCODE = 'userG18'
  const PASSWORD_HARDCODE = '12345'

  //2. userEffects

  //3. funciones            //destructuring
  const handleInputValue = ({target: { value, name }}) =>{
    name === 'user' ? setUser(value) : setPassword(value)
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
  };

  const submitForm = () => {
    // if(user === USER_HARDCODE && password === PASSWORD_HARDCODE){
    //   console.log('login exitoso')
    // } else{
    //   console.log('no pasa')
    // }
    // user === USER_HARDCODE && password === PASSWORD_HARDCODE
    // ? alert('acceso concedido')
    // : alert('Datos incorrectos')

    const object { user: userG18 }
    
    axios.post('')

  };

  return (
    <div className="App">
        <h3>Login app Fake </h3>
        <div>

          <div style={{margin:10}}>
            <label htmlFor="">Usuario</label>
            <input 
              type="text"
              name='user'
              value={user}
              onChange={handleInputValue}
            />
          </div>

          <div style={{margin:10}}>
            <label htmlFor="">Password</label>
            <input 
              type="password"
              name='password'
              value={password} 
              onChange={handleInputValue}
            />
          </div>

          <button onClick={() => submitForm()}>Enviar</button>

        </div>
    </div>
  )
}

export default App


