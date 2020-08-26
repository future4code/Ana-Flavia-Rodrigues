import React from 'react';
//import './App.css';
import axios from "axios";
import styled from 'styled-components';
import InserirUsuarios from "./compnents/InserirUsuarios";
import ListarNomeUsuarios from "./compnents/ListarNomeUsuarios";

export default class App extends React.Component {
  state = {
    paginaAtual : "inserirUsuarios"
  }

  trocaPagina = () => {
    this.state.paginaAtual === "inserirUsuarios"
    ? this.setState({paginaAtual:"listarNomeUsuarios" }) : this.setState({paginaAtual:"inserirUsuarios"});
    };

  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value})
  };

  onChangeEmailValue = (event) => {
    this.setState({emailValue: event.target.value})
  }
  
  render() {
    const pgAtual = () => {
      if (this.state.paginaAtual === "listarNomeUsuarios") {
        return <ListarNomeUsuarios/>;
      } else if (this.state.paginaAtual === "inserirUsuarios") {
        return <InserirUsuarios/>;
    }
  }
    return (
      <AppContainer>
        {pgAtual()}
       <button onClick={this.trocaPagina}>Trocar de Página</button>
    </AppContainer>)
}

}


const AppContainer = styled.div`
text-align: center;
font-family: Philosopher, Arial;
`


