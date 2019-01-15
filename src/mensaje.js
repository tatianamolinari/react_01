import React, { Component } from "react";

export class Mensaje extends Component {
  render() {
    const { nombre, mensaje } = this.props;
    return (
      <div>
        <h1>Hola {nombre}!</h1>
        <p>{mensaje}</p>
      </div>
    );
  }
}

export default Mensaje;
