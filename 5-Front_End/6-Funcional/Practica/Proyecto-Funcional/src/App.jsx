import { useState } from 'react'
import './App.css'

const App = () => {

  //1. estados
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  //2. userEffects

  //3. funciones            //destructuring
  const handleInputValue = ({target: {value}}) =>{
    console.log('valor', value)
    // //el destructuring recortó esto:
    // const handleInputValue = (e) => {
    //  console.log('valor, e.target.value)
    //}
  }

  return (
    <div className="App">
        <h3>Login app Fake </h3>
        <div>

          <div style={{margin:10}}>
            <label htmlFor="">Usuario</label>
            <input type="text" value={user}/>
          </div>

          <div style={{margin:10}}>
            <label htmlFor="">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={handleInputValue}
            />
          </div>

          <button>Enviar</button>

        </div>
    </div>
  )
}

export default App


