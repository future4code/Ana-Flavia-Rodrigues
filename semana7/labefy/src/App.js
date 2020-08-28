import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CriarPlaylist from './components/CriarPlaylist'

class App extends React.Component {
  render(){

    return (
      <AppContainer>
        <h1>LABEFY</h1>
        <CriarPlaylist/>
      </AppContainer>
    
    );
  }
}

export default App;
const AppContainer = styled.div`
text-align: center;
`
