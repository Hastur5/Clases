import React, { Component } from 'react'

 class Counter extends Component {
  state = {};

  /**
   * IMPORTANTE
   * 
   * PADRE - HIJO el medio de comunicación es por ATRIBUTOS {this.props.count1}
   * 
   * HIJO - PADRE el medio de comunicación es por MÉTODOS {this.props.increment()}
   * 
   */

  render() {

    console.log("props", this.props);

    return (
        <div>
            <p>Valor de contador is {this.props.fili}</p>
            <button 
            
          onClick = {() => this.props.volcan({fili: this.props.fili + 1})}>
        
            Incrementar
            </button>

            <br />
            <br />
            
            <p>Valor de contador is {this.props.skip}</p>
            
            <button onClick={() => this.props.volcan2({skip: this.props.skip - 1})}>

            Decrementar
            </button>
            <br />
        </div>
    );
  }
}

export default Counter;