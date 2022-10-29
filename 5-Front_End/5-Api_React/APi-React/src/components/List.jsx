import { Component } from 'react';
import axios from 'axios';
import Pokemon from "./Pokemon";

class List extends Component {

    state = {
        pokemones: [],
        resultados: []
    }

    constructor(props){
        super(props)
        //This biding is neccesary to make ´this´ work in the callback.
        this.buscar = this.buscar.bind(this)
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
      let resultados = this.state.pokemones.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(q)

      })
      this.setState({resultados:resultados})
    }

    render(){
        return(
            <div className="column">
                <div className="navbar is-black is-fixed-top">

                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokedex" width="150" height="50"/>
                    
                    <input className="input is-rounded" onKeyUp={this.buscar} type="text" placeholder="Buscar"></input>
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