import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import Mensaje from "./mensaje";
import FormNombre from "./formNombre";

export class App extends Component {
  state = { nombre: this.props.nombre };

  manejarNombre = nombre => {
    this.setState({ nombre: nombre });
  };

  render() {
    const { nombre } = this.state;
    const { mensaje } = this.props; //declarando constantes
    return (
      <Grid>
        <Mensaje nombre={nombre} mensaje={mensaje} />
        <FormNombre nuevoNombre={this.manejarNombre} />
      </Grid>
    );
  }
}

App.defaultProps = { nombre: "React", mensaje: "Oppss" };

export default App;
