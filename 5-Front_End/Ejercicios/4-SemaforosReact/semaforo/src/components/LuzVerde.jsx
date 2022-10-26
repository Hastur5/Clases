import React, { Component } from "react";

export default class LuzVerde extends Component {

    render() {
        const colorVerde = {
            borderStyle: "inset",
            color: "#146413",
            backgroundColor: "#04FF00",
            borderColor: "#013500"
        };
        return(
            <h4 style={colorVerde}>La luz actual es Verde.</h4>
        );
    };
}