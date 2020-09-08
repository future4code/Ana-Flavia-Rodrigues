import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {baseUrl,axiosConfig} from '../../constants/axiosConstants'




export default class CriarPlaylist extends React.Component {
  state = {
    nameValue: " " 
  };


  inserirPlayList = () =>{
    const body = {
      name: this.state.nameValue
    }
    
    const request = axios
    .post(
      baseUrl,body,axiosConfig
        
      );
    
      request
        .then((resposta) => {
          this.setState({ name: resposta.data });
          alert(`Playlist ${this.state.nameValue} incluido com sucesso`);
        })
        .catch((erro) => {
          alert("Ocorreu um erro");
        });
    
  }
  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value})
  }
      
  render(){

    return (
      <CriarContainer>
        <h4>Criar PlayList</h4>
        <Nome>Digite o nome de sua playlist: </Nome>
        <input value={this.setState.nameValue}
        onChange={this.onChangeNameValue}
        placeholder="Nome da Playlist"/>
        <button onClick={this.inserirPlayList}>Criar</button>
    </CriarContainer>
    );
  }
}
const CriarContainer = styled.div`
padding:8px;
border: 1px solid grey;
display: grid;
justify-content: center;
justify-items: center;
font-family: Roboto, sans-serif;
button{
  width: 60%;
  height: 40px;
  background: #ff602f;
  border: none;
  border-radius: 8px;
  color: #ffff;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 20px;
  //margin: 0 auto;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 40px;
  transition: filter 0.2s;
  &:hover {
      filter: opacity(80%);
  }
`
const Nome= styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
`