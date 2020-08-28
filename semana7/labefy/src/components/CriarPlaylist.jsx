import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class CriarPlaylist extends React.Component {
  render(){

    return (
      <CriarContainer>
        <h1>Criar PlayList</h1>
        <input value="" placeholder="Nome da Playlist"></input>
    </CriarContainer>
    
    );
  }
}
const CriarContainer = styled.div`
text-align: center;
`

