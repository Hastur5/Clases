import React, { Component } from "react";

export default class LuzAmarilla extends Component {

    render() {
        const colorAmarillo = {
            borderStyle: "inset",
            color: "#B5B728",
            backgroundColor: "#FBFF00",
            borderColor: "#6B6D07",
        };
        return(
            <h4 style={colorAmarillo}>El semáforo está en: Amarillo.</h4>
        );
    };
}