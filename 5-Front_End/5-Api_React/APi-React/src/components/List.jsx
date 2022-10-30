import { Component } from 'react';
import axios from 'axios';
import Pokemon from "./Pokemon";
import Select from 'react-select';

class List extends Component {

    state = {
        pokemones: [],
        resultados: []
    }

    constructor(props) {
        super(props)
        //This biding is neccesary to make ´this´ work in the callback.
        this.buscar = this.buscar.bind(this)
        // this.tipo = this.tipo.bind(this)
    }

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
        .then((response) => {
            this.setState({pokemones:response.data, resultados:response.data});
        })
        .catch((error) => {
            console.log(error)
        });
    }

    buscar = (event) => {
      let q = event.currentTarget.value.toLowerCase()
      let filtrados = this.state.pokemones.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(q)

      })
      this.setState({resultados:filtrados})
    }

    tipo (event) {
        let skip = event.currentTarget.value()
        let filtrados = this.state.pokemones.filter((pokemon) => {
            return pokemon.type.includes(skip)
        })
        this.setState({resultados:filtrados})
    }
    
    render(){
        return(
            <div className="column">
                <div className="navbar is-black is-fixed-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokedex" width="150" height="50"/>
                    <input className="input is-rounded is-expanded" onKeyUp={this.buscar} type="text" placeholder="Buscar"></input>
                    <br></br>
                    <select onChange={this.tipo}>
                   {this.state.pokemones.map(pokemones =>
                        (<option key={pokemones.id} value={pokemones.id}>{pokemones.type}></option>
                        )
                    )}
                   </select>
                </div>

                <div className='columns is-mobile is-multiline is-centered'>
                    {
                        this.state.resultados.map(pokemon => {
                            return(<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} fili={pokemon.name} number={pokemon.number}></Pokemon>)
                        })
                    }
                </div>
            </div>
        )   
    }
};

export default List;