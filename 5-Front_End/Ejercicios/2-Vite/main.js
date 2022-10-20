import './styles.scss'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div id="app" class="columns">
  <nav class="navbar is-fixed-top has-background-black-bis" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="index.html">
        <img src="https://static.vecteezy.com/system/resources/previews/002/082/085/non_2x/cute-beagle-dog-paws-up-over-wall-dog-face-cartoon-illustration-vector.jpg" alt="Mira el banco del perriwis" width="50" height="100">
      </a>
    </div>
  </nav>
  <div id="formulario">
    <div class="column">
      <div id="inicio" class="visible">
        <img src="https://static.vecteezy.com/system/resources/previews/002/082/085/non_2x/cute-beagle-dog-paws-up-over-wall-dog-face-cartoon-illustration-vector.jpg" alt="Mira el banco del perriwis" width="100" height="200">
        <h1 class="is-size-2">Bienvenido al banco del perrito</h1>
      </div>
      <div id="pantalla" class="hide">
      </div>
      <div id="pantallaBtn" class="hide">
          <button class="button is-dark" type="button" id="regresarSaldo">Regresar</button>
          <a href="index.html">
            <button id="btnSalida" class="button is-dark">Salir</button>
          </a>
      </div>
    </div>
    <div class="column" >
      <div id="login" class="visible">
          <label for="user">Usuario</label>
          <input class="input is-rounded" type="text" id="user"> 
          <label for="password">Contraseña</label>
          <input type="password" id="password" class="input is-rounded">
          <button onclick="inicioSesion" id="inicioSesion" class="button is-dark">Iniciar Sesión</button>
      </div>
          <div id="operaciones" class="hide">
            <img src="https://static.vecteezy.com/system/resources/previews/002/082/085/non_2x/cute-beagle-dog-paws-up-over-wall-dog-face-cartoon-illustration-vector.jpg" alt="Mira el banco del perriwis" width="100" height="200">
          <h3>¿Qué operación deseas realizar?</h3>
          <button id="saldo" class="button is-dark" type="button">Consultar tu saldo</button>
          <button id="depositar" class="button is-dark" type="button">Depositar</button>
          <button id="retirar" class="button is-dark" type="button">Retirar</button>
          <a href="index.html">
            <button id="btnSalida" class="button is-dark">Salir</button>
          </a>
      </div>
      <div id="operacionSaldo" class="hide"></div>
      <div id="operacionDeposito" class="hide">
          <img src="https://static.vecteezy.com/system/resources/previews/002/082/085/non_2x/cute-beagle-dog-paws-up-over-wall-dog-face-cartoon-illustration-vector.jpg" alt="Mira el banco del perriwis" width="100" height="200">
          <input class="input is-rounded" placeholder="¿Cuánto deseas depositar?" type="number" id="deposito">
          <button id="btnDeposito" class="button is-dark">Depositar</button>
          <button id="regresarDeposito" class="button is-dark">Regresar</button>
          <a href="index.html">
            <button id="btnSalida" class="button is-dark">Salir</button>
          </a>
      </div>
      <div id="operacionRetiro" class="hide">
          <input class="input is-rounded" placeholder="¿Cuánto deseas retirar?" type="number" id="retiro">
          <button id="btnRetiro" class="button is-dark">Retirar</button>
          <button id="regresarRetiro" class="button is-dark">Regresar</button>
          <a href="index.html">
            <button id="btnSalida" class="button is-dark">Salir</button>
          </a>
      </div>
    </div>
  </div>
</div>
`

setupCounter(document.querySelector('#counter'))
