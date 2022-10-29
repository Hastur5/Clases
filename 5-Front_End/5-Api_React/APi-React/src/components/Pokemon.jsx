import { Fragment } from "react";
import { Component } from "react";

class Pokemon extends Component{
    
    render(){

        return(
            <div className="columns">
                <div className="column is-12">
                    <div className="card box">
                        <div className="card-image box-inner">
                            <figure className="image box-front">
                                <img src={this.props.image}/>
                            </figure>
                        </div>
                        <div className="card-content box-back">{this.props.number}: {this.props.fili}</div>
                    </div>
                </div>
            </div>       
        )
    }
};

export default Pokemon;