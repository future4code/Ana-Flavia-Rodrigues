import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class CardMusica extends React.Component {

 

  render(){

    return (
      <MusicaContainer>
        <p> Minhas Musicas</p>
        <NomeMusica>
        <ul>
            <li>Musica</li>
            <button>></button>
            </ul>
        </NomeMusica>
        <button>Remover</button>
      </MusicaContainer>
    
    );
  }
}
const MusicaContainer = styled.div`
padding:2px;
border: 1px solid grey;
display: grid;
justify-content: center;
justify-items: center;
font-size: 14px;

button{
  width: 80%;
  height: 30px;
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
  //text-decoration: none;
  font-size: 14px;
  //line-height: 40px;
  transition: filter 0.2s;
  &:hover {
      filter: opacity(80%);
  }
`
const NomeMusica= styled.div`
display: grid;
grid-auto-flow:column;
gap: 4px;
align-itms:center;
  button{
    width: 30px;
    height: 20px; 
  }
`