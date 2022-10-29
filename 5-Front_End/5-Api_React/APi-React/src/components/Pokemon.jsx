import { Component } from "react";

class Pokemon extends Component{
    
    render(){

        return(
            <div className="column is-2">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={this.props.image}/>
                        </figure>
                    </div>
                    <div className="card-content">{this.props.number}: {this.props.fili}
                    </div>
                </div>
            </div>
        )
    }
};

export default Pokemon;