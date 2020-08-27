import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import {baseUrl, axiosConfig} from '../constants/axiosConstants'


export default class inserirUsuarios extends React.Component {
    state = {
        nameValue : "",
        emailValue : ""
      
    }
    inserirUsuarios = () =>{
        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue
    
        }
        
        const request = axios
        .post(
          baseUrl,body,axiosConfig
            
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
      <div>
         <p>Nome:<Input value={this.state.nameValue} 
                        placeholder='Nome do Usuário'   
                        onChange={this.onChangeNameValue}/></p>
         <p>E-mail:<Input value={this.state.emailValue}     
                        placeholder='Email do Usuário'
                        onChange={this.onChangeEmailValue}/></p>
         <p><button onClick={this.inserirUsuarios}>Inserir Usuário</button></p>
      </div>)
  
  }
};
const Input = styled.input`
height: 30px;
width: 150px;
display: flex;
border-radius: 5px;
margin: 0 auto;
box-shadow: 0px 0px 2px #57534a;`