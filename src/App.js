import React, {  Component, Fragment} from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import BarraDeNavegacion from './Components/BarraDeNavegacion';
import Cards from './Components/cards componentes/Cards';
// import TextoPrueba from './Components/TextoPrueba';


function App(){
  const [Numero, setNumero] = React.useState(0);

    const handleIncrement = () => {
      setNumero(Numero + 1)
    }

    const handleDecrement = () => {
      setNumero(Numero - 1)
    }
  
  return(
  <div>
    <div className="App">
      <h1>Hola Soy un titulo</h1>
      <p>{Numero}</p>
      <button onClick={handleIncrement}> Incrementar </button>
      <button onClick={handleDecrement}> Disminuir </button>
      <ItemListContainer greeting="Entrega Numero 3"/>

    </div>
  </div>

  )
}


//  class App extends Component {
//   render() {  
//     return (
//       <Fragment>
//         <BarraDeNavegacion/>
//         <TextoPrueba texto={'Hola, sí lees esto estás bienvenido'}/>
//         <div className="container">
//           <Cards 
//             name={'María Fernanda Ossa Prieto'} 
//             edad={'22 años'} 
//             pasiones={'Su novio hermoso papasito lindo'}
//             img={'https://react.semantic-ui.com/images/avatar/small/molly.png'}
//           />

//           <Cards 
//             name={'Diego Alejandro Peña Farfan'} 
//             edad={'21 años'} 
//             pasiones={'Su novia hermosa mamasita bella'}
//             img={'https://react.semantic-ui.com/images/avatar/large/matthew.png'}
//           />

//           <Cards 
//             name={'Jualiana del Carne Saragosa Nieves'} 
//             edad={'45 años'} 
//             pasiones={'Sus 44 gatos'}
//             img={'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'}
//           />
//         </div>
       
//       </Fragment>
//     );
//   }
// }  

export default App; 