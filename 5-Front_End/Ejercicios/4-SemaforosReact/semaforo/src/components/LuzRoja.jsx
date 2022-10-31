import React, { Component } from "react";

export default class LuzRoja extends Component {

    render() {
        const colorRojo = {
            borderStyle: "inset",
            color: "white",
            backgroundColor: "red",
            borderColor: "red"
        };
        return(
            <h4 style={colorRojo}>La luz actual es Rojo.</h4>
        );
    };
}