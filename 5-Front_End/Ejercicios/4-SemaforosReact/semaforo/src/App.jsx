import { Component } from 'react'
import './App.css'
import LuzVerde from './components/LuzVerde';
import LuzAmarilla from './components/LuzAmarilla';
import LuzRoja from './components/LuzRoja';

class App extends Component {

state = {
  luz: 'verde',
};

  render() {

    return (
      <div className="App">
        <h2>Semáforo</h2>

        <h4>El semáforo está en: {this.state.luz}</h4>
        
        {this.state.luz === 'verde' ? <LuzVerde /> :  this.state.luz === "amarilla" ? <LuzAmarilla/> : this.state.luz === "rojo" <LuzRoja/> }


        <button onClick = {() => {
          
          this.setState({luz: 'amarillo'})
          
        }}>
          
          Cambiar semáforo
        </button>
      </div>
    );
  };
};
export default App
