import React from 'react';
import './App.css';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';

export class App extends React.Component {
  state = {
    etapa: 1
  }
  irParaProximaEtapa = () => {
    
  }
  
  renderizaEtapa = () => {
  switch (this.state.etapa) {
    case 1:
      return <Etapa1 />;
    case 2:
      return <Etapa2 />;
    case 3:
      return <Etapa3 />;
    case 4:
      return <Final />;
    
  }
}
  render() {
   return (
    <main>
      {this.renderizaEtapa()}
      <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
    </main>
    )
  }
 }
export default App;

