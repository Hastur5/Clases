import { Component } from 'react'
import './App.css'
import LuzVerde from './components/LuzVerde';
import LuzAmarilla from './components/LuzAmarilla';

class App extends Component {

state = {
  luz: 'verde',
};

  render() {

    return (
      <div className="App">
        <h2>Semáforo</h2>

        <h4>El semáforo está en: {this.state.luz}</h4>
        
        {this.state.luz === 'verde' ? <LuzVerde /> : <LuzAmarilla/> }

        {/* {this.state.light === "green" ? <GreenLight/>: ( this.state.light === "yellow" ? <YellowLight/>: <RedLight/> )} */}


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
