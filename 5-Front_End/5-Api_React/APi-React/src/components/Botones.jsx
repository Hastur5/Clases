import { Component } from "react";

class Botones extends Component {

    render(){
        return(
            <div>
                <button className="botoncitos" 
                onClick={() => this.props.boton()}>
                    <img src="https://4.bp.blogspot.com/--amlPVtwfsI/WflFWo4svmI/AAAAAAAAAQc/9KYnpKF4sbI8SxiiUvoJCa6idfvNEOD6wCLcBGAs/s1600/agua.jpg"/>
                </button>
            </div>
        )
    }
}

// agua(event) {
//     let filtrados = this.state.pokemones.filter((pokemon) => {
//       return pokemon.type.includes("water");
//     });
//     this.setState({ resultados: filtrados });
//     //console.log(resultados);
//   }

export default Botones;