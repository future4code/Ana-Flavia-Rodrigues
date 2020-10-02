import React from 'react';
import Router from './router/Router';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './constants/theme';
import { BrowserRouter} from 'react-router-dom';
import MainAppBar from './components/AppBar/MainAppBar'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar/>
        <InnerScreenContainer>
          <Router/>
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
