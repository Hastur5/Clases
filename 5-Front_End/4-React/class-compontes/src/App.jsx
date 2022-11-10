import { Component } from 'react'
import './App.css'
import Counter from './components/Counter';


//1. Class Component
// Extender de Component
class App extends Component {
  
  //2. Mandar llamar a render

  state = {
    count1: 0,
    count2:10,
    isDarkMode: true
  };

  render() {

    const name = 'g18';
    const day = 'Lunes';

    const greetings = () => {
      if(this.state.count1 >=18){
      return  (
          <p> Eres mayor de edad. </p>
      );
      } else return <p>Estás Shikito, bro</p>
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
        {/* {this.state.count1 >= 18 ?(
          <p>Eres mayor de edad.</p>
        ) : (
          <p>Estás shikito, bro</p>
        )
        } */}
        {greetings()}
          {/* para setear estados se usa this.setState ({}) */}
        
        <Counter
        // nombreProperty = value
        fili = {this.state.count1} 
        skip = {this.state.count2} 
        volcan = {() => this.setState({count1 : this.state.count1 + 1})} 
        volcan2 = {() => this.setState({count2 : this.state.count2 - 1})} />

        {/* <button className='' id='' style={}></button> */}
        
        <br />
       
        <button onClick={() => this.setState({isDarkMode: !this.state.isDarkMode})}>
          Cambiar estilo de plantilla
        </button>
      </div>
    </div>
  )}
};

export default App
