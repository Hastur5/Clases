import { useState } from 'react'
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import User from '../components/User';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='login' element={<Navigate to='/' replace/>} />

        {/* Importante poner la / */}
        <Route path='main-dashboard' element={<Dashboard/>} />
        <Route path='user' element={<User/>} />

        {/* Página 404 */}
        <Route path='*' element={<h3> Page not found 404 </h3>}/>

      </Routes>
        <ul>
          <li><Link className='boton' to="/">Home</Link></li>
          <li><Link className='boton' to="login">Login</Link></li>
          <li><Link className='boton' to="main-dashboard">main-dashboard</Link></li>
          <li><Link className='boton' to="user" href="/user">user</Link></li>
        </ul>
    </>
  )
}

export default App
