import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Component } from 'react'


//1. Class Component
// Extender de Component
class App extends Component {
  
  //2. Mandar llamar a render

  state = {
    count: 0,
    age: 8,
    name: 'Fili',
  };

  render() {

    const name = 'g18';
    const day = 'Lunes';

    const greetings = () => {
      return  (
        <div>
          <p> Saludos desde mi función </p>
        </div>
      );
    }

    //3. Regresar JSX
    return (
    <div className="App">
      <h5>Holis :3</h5>
      <div className="card">
        <span> Ésta es la generación {name}</span>
        <h4>Hoy es el día: {day} </h4>
        {greetings()}
          {/* para setear estados se usa this.setState ({}) */}
        <p>Valor de contador is {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
        
        Incrementar
        </button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>
        
        Decrementar
        </button>
      </div>
    </div>
  )}
}

export default App
