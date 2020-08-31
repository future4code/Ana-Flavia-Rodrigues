import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardMusica from './CardMusica'



export default class Playlist extends React.Component {

  const

  render(){

    return (
      <PlayContainer>
        <CardMusica/>
        <CardMusica/>
        <CardMusica/>
        <CardMusica/>
    </PlayContainer>
    
    );
  }
}
const PlayContainer = styled.div`
text-align: center;
border: 1px solid grey;
display: grid;
border: 1px solid grey;
grid-template-columns:1fr 1fr 1fr 1fr ;
padding: 16px;
gap:5px;
margin-top:105px;

`