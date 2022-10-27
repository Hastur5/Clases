import { Component } from 'react';
import axios from 'axios';
import Pokemon from "./Pokemon";

class List extends Component {

    state = {
        pokemones: []
    }

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
        .then((response) => {
            this.setState({pokemones:response.data});
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render(){
        return(
            <div className='container'>
                <div className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokedex" width="150" height="50"/>
                    </div>
                    <input class="input is-rounded" type="text" placeholder="Buscar"></input>
                </div>

                <div className='columns is-multiline'>
                    {
                        this.state.pokemones.map(pokemon => {
                            return(<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} fili={pokemon.name} number={pokemon.number}></Pokemon>)
                        })
                    }
                </div>
            </div>
        )   
    }
};

export default List;