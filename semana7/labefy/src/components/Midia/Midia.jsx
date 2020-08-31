import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class Midia extends React.Component {

  const

  render(){

    return (
      <MidiaContainer>
        <h3>Tocar Musica</h3>

        <audio controls  
          source src="http://spoti4.future4.com.br/90.mp3" 
        />

    </MidiaContainer>
    
    );
  }
}
const MidiaContainer = styled.div`
    text-align: center;
    border: 1px solid grey
    

`