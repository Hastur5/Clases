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
    isDarkMode: false
  };

  render() {

    const name = 'g18';
    const day = 'Lunes';

    const greetings = () => {
      if(this.state.count >=18){
      return  (
          <p> Eres mayor de edad. </p>
      );
      } else return <p>Estás Shikito</p>
    };

   const darkModeOff = {
    fontSize: '35px', 
    borderStyle: 'inset',
    color: 'black',
    backgroundColor: 'white'
   };

   const darkModeOn = {
    fontSize: '35px', 
    borderStyle: 'inset'
   };




    //3. Regresar JSX
    return (
    <div className="App">
      <h5>Holis :3</h5>

    {/* Estilos: Se maneja através de objetos
    Se usa camelCase. */}
      <div className="card" 
        style={this.state.isDarkMode ? darkModeOn: darkModeOff}>
        <span> Ésta es la generación {name}</span>
        <h4>Hoy es el día: {day} </h4>
        {/* Conditional Rendering IF */}
        {/* 1er Escenario if () {} */}
        {/* {this.state.count >= 18 && (
        <p> Eres mayor de edad con Conditional Rendering.</p>
        )} */}
        {/* 2do Escenario if () {} else {} */}
        {this.state.count >= 18 ?(
          <p>Eres mayor de edad.</p>
        ) : (
          <p>Estás shikito, bro</p>
        )
        }
        {/* {greetings()} */}
          {/* para setear estados se usa this.setState ({}) */}
        <p>Valor de contador is {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
        
        Incrementar
        </button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>

        Decrementar
        </button>
        <br />
       
        <button onClick={() => this.setState({isDarkMode: !this.state.isDarkMode})}>
          Cambiar
        </button>
      </div>
    </div>
  )}
};

export default App
