import { Fragment, Component } from "react";

class Pokemon extends Component{
    
    render(){

        return(
            <Fragment>
                <div className="columns">
                    <div className="column is-12">
                        <div className="card"
                             onClick={() => this.props.getPokemon(this.props.fili.toLowerCase())}>
                            <div className="card-image box-inner">
                                <figure className="image box-front">
                                    <img src={this.props.image}/>
                                </figure>
                            </div>
                            <div className="card-content box-back">{this.props.number}:{this.props.fili}</div>
                        </div>
                    </div>
                </div>
            </Fragment>       
        )
    }
};

export default Pokemon;