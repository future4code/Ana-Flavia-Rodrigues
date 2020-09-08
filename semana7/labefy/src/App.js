import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlayList from './components/PlayList/PlayList'
import Midia from './components/Midia/Midia'
import Lateral from './components/Lateral/Lateral';
import Logo from './imagem/logo.png'


class App extends React.Component {
  state = {
    nameValue: " " 
  };


  
  render(){

    return (
      <AppContainer>
        
        <div>
        <img src={Logo}/>
          <Lateral/>
          
        </div>
        <div>
          <PlayList/>
          <Midia/>
          </div>
      </AppContainer>
    
    );
  }
}

export default App;
const AppContainer = styled.div`
display: grid;
border: 1px solid grey;
grid-template-columns:1fr 2fr ;
padding: 16px;
gap:5px;
Background:#1C1C1C;
color:white;

`
