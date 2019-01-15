import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export class FormNombre extends Component {
  state = { nombre: this.props.nombre };

  cambiarNombre = e => {
    e.preventDefault(); // retener acción y no mandarla al back
    const nombre = e.target.nombre.value;
    if (typeof nombre == "string" && nombre.length > 0) {
      this.props.nuevoNombre(nombre);
      e.target.nombre.value = ""; //limpia input
    }
  };

  render() {
    const { nombre } = this.state;
    return (
      <form onSubmit={this.cambiarNombre}>
        <FormGroup>
          <ControlLabel> Nombre</ControlLabel>
          <FormControl type="text" name="nombre" id="name" />
          <Button type="submit"> Salutte </Button>
        </FormGroup>
      </form>
    );
  }
}

export default FormNombre;
