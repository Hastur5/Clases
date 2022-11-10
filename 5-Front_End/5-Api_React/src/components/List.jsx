import { Component } from 'react';
import axios from 'axios';
import Pokemon from "./Pokemon";
import PokemonDetail from './PokemonDetail';
import Botones from './Botones';

class List extends Component {

    state = {
        pokemones: [],
        resultados: [],
        pokemonInfo: {},
        namePokemon: "",
        agua: []
    }

    constructor(props) {
        super(props)
        //This biding is neccesary to make ´this´ work in the callback.
        this.buscar = this.buscar.bind(this)
        // this.tipo = this.tipo.bind(this)
        this.boton = this.boton.bind(this)
        this.getPokemonInfo = this.getPokemonInfo.bind(this)
    }

    componentDidMount(){
        axios
            .get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
            .then((response) => {
                this.setState({pokemones:response.data, resultados:response.data});
            })
            .catch((error) => {
                console.log(error)
            });
    }

    
    //Previus props y previous state
    componentDidUpdate(prevProps, prevState){
        console.log(prevState.namePokemon)
        console.log(prevProps.namePokemon)
        
        if(prevState.namePokemon !== this.state.namePokemon){
            this.getPokemonInfo();
        }
    }
    
    buscar = (event) => {
        let q = event.currentTarget.value.toLowerCase()
        let filtrados = this.state.pokemones.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(q)
            
        })
        this.setState({ resultados:filtrados })
    }

    boton = (event) => {
        let filtrados = this.state.pokemones.filter((pokemon) => {
            return pokemon.type.includes("water");
        });
        this.setState({ resultados:filtrados });
        //console.log(resultados);
    }
    
    getPokemonInfo(){
        const BASE_URL = 'https://pokeapi.co/api/v2/';

        axios
        .get(`${BASE_URL}pokemon/${this.state.namePokemon}`)
        .then((response) => {
        //Esto es destructuring
        const { data } = response
        this.setState({ pokemonInfo:data })
        })
        .catch((error) => {
            console.log('error',error)
        })
    }
    
    tipo (event) {
        let skip = event.currentTarget.value()
        let filtrados = this.state.pokemones.filter((pokemon) => {
            return pokemon.type.includes(skip)
        })
        this.setState({ resultados:filtrados })
    }
    
    render(){
        return(
            <div className="column">
                <div className="navbar is-hoverable is-transparent is-fixed-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokedex" width="150" height="30"/>
                    <input className="input is-rounded is-expanded" onKeyUp={this.buscar} type="text" placeholder="Buscar"></input>
                    {/* <select onChange={this.tipo}>
                        {this.state.pokemones.map(pokemones =>
                            (<option key={pokemones.id} value={pokemones.id}>{pokemones.type}</option>
                            )
                        )}
                    </select> */}
                    <Botones className="navbar-item" boton={this.boton}/>   
                </div>
                <div className='columns is-mobile is-multiline is-centered'>
                    {Object.values(this.state.pokemonInfo).length > 0 ? ( 
                            <PokemonDetail
                                detail={this.state.pokemonInfo}
                                cleanPokemonDetail={() => this.setState({ pokemonInfo: {} })}
                            />

                    ) : (
                      
                        <div className='columns is-mobile is-multiline is-centered'>
                            {this.state.resultados.map((pokemon) => {
                                return (
                                    <Pokemon
                                        key={pokemon.id}
                                        image={pokemon.ThumbnailImage}
                                        number={pokemon.number}
                                        fili={pokemon.name}
                                        getPokemon={(namePokemon) =>
                                        this.setState({ namePokemon })
                                        }
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            
        )   
    }
};

export default List;