import React, { Component, Fragment} from 'react';
import './App.css';
import BarraDeNavegacion from './Components/BarraDeNavegacion';

let name = "sí estás leyendo es porque corre bien."

 class App extends Component {
  render() {
    return (
      <Fragment>
        <BarraDeNavegacion/>
        <h2 className="App"> Hola, <span>{name}</span> </h2>
      </Fragment>
    );
  }
} 

export default App; 