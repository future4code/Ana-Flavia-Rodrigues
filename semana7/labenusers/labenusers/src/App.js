import React from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components';

export default class App extends React.Component {
  state = {
    nameValue : "",
    emailValue : ""
  }
  pegarNomeUsuarios = () =>{
    
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers:{
            Authorization: "Ana-Flavia-Jackson"
          }
        }
      );
    
      request
        .then((resposta) => {
          this.setState({ name: resposta.data });
        })
        .catch((erro) => {
          console.log("Ocorreu um erro");
        });
    
  }
  
  inserirUsuarios = () =>{
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue

    }
    
    const request = axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
        {
          headers:{
            Authorization: "Ana-Flavia-Jackson"
          }
        }
      );
    
      request
        .then((resposta) => {
          this.setState({ name: resposta.data });
          alert('Usuário incluido com sucesso');
        })
        .catch((erro) => {
          alert("Ocorreu um erro");
        });
    
  }

  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value})
  }

  onChangeEmailValue = (event) => {
    this.setState({emailValue: event.target.value})
  }
  
  render() {
    return (
      <main>
        <Form>
        <h3>Nome:</h3>
          <Input
          value={this.state.nameValue}
          onChange={this.onChangeNameValue}
          placeholder={'Nome do Usuário'}
          />
          <h5>E-mail:</h5>
          <Input
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue}
          placeholder={'E-mail do Usuário'}
          /> 
          <button onClick={this.inserirUsuarios}>Inserir Usuário</button>
        </Form>
    </main>)

}


}
const Form = styled.div`
border-radius: 5px;
padding: 5px;
box-shadow: 0px 0px 4px #57534a;
height: 300px;
width: 400px;
margin:0 auto;
align-items:center;
  h5 {
    color: #57534a;
    text-align: center;
    font-family: Philosopher, Arial;
}
`
const Input = styled.input`
height: 30px;
width: 150px;
display: flex;
border-radius: 5px;
margin: 0 auto;
`



