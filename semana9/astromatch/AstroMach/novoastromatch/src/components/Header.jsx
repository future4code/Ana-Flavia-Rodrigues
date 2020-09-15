import React, { useState }from 'react';
import styled from 'styled-components';
import { createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import App from '../App';
//import Logo from '../assets/logo.png'

const theme = createMuiTheme({
  palette:{
    primary:{ 
      main: '#f06f5c'
    }, 
    secondary:{
      main: '#fff'
    }
  }
});

export const Header = () => {

    return (
    <ThemeProvider theme={theme}>
      <Main >
          <Button variant='contained' color='primary'>
            Voltar
          </Button>
               <p>astromatch</p>
          <Button  variant='contained' color='primary'  >
          Card
          </Button>
           
      </Main>
    </ThemeProvider>
    );
}
 
const Main = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: calc(16px + 0.4vw);
  font-weight: bold;
  color: #f06f5c;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items : center;
  text-align: center;
  justify-content: center;
  padding: 0 10px;
  margin: 0 auto  ;
  margin-bottom: 2px;
  margin-top: 5px;
  border: 1px solid #000;
  box-shadow: 4px 0px 4px #57534a;
  width: 30%;
  height: 70px;
  border-radius: 10px;
   button {
    box-sizing: border-box;
    border-radius: 22px;
    box-shadow: 0 2px 2px rgb(210,210,210);
    display: grid;
    place-items: center;
    font-size: calc(8px + 0.4vw);
    font-weight: bold;
    color: white;
    transition: 0.1s;
    cursor: pointer;
    margin: 5px;
    padding: 9px 17px;
    min-width: 100px;
    @media screen and (min-width: 300px){margin: 3px; padding: 10px 15px; min-width: 100px;};

    background-color: rgb(40,40,40);
    :hover{
        background-color: #d3d3d3;
        box-shadow: 0 3px 2px rgb(170,170,170);
    }

    :active{box-shadow: 0 1px 2px rgb(170,170,170);}

    :first-child{
        background-color: #ff5c5c;
        :hover{
            background-color: #e98b97;
        }
    }
    `  


  
export default Header ;