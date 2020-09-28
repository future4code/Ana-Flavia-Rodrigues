import React from 'react';
import styled from 'styled-components'
import Router from './router/Router'


function App() {
  return (
    <AppContainer >
     <Router/>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
display: flex;
flex-direction: column;

`