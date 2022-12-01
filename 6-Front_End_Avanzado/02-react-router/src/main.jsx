import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Importar BrowserRouter para dotar a mi App de poder manejar rutas. Debe estar en un componente superior para que esté disponible en toda mi App.
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
