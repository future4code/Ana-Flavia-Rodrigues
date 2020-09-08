import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AdicionarMusica from './AdicionarMusica'
import CriarPlaylist from './CriarPlaylist'

export default class Lateral extends React.Component {

    const
  
    render(){
  
      return (
        <LateralContainer>
          <CriarPlaylist/>
          <AdicionarMusica/>
      </LateralContainer>
      
      );
    }
  }
  const LateralContainer = styled.div`
  text-align: center;
  border: 1px solid grey;
  

  `