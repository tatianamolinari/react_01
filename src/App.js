import React, { Component } from "react";
import { Grid } from "react-bootstrap";

export class App extends Component {
  render() {
    const { nombre, mensaje } = this.props; //declarando constantes
    return (
      <Grid>
        <h1>Hola {nombre}!</h1>
        {mensaje}
      </Grid>
    );
  }
}

App.defaultProps = { nombre: "React", mensaje: "Oppss" };

export default App;
