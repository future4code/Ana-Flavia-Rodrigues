import React, { useState, useEffect } from 'react';
import styled from 'styled-components';




export const BtMatch = () => {
  const [personId, setPesonid] = useState(null);
  
  // const postChoosePerson = (funcaoSalvar) => {
  //   const body = {
  //     id:personId ,
  //     choice: true
  // }
  //   axios
  //     .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flavia/choose-person",body)
  //     .then((response) => {
            
  //       funcaoSalvar(response.data.matches);
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  

    return (
    
      <Nav>
        <NavBtn>NÃO</NavBtn>
        <NavBtn  >SIM</NavBtn>
      </Nav>
    
    );
}

const Nav = styled.nav`
display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items : center;
  padding: 0 25px;
  margin: 0 auto  ;
  margin-top: 15px;
  border: 1px solid #000;
  box-shadow: 4px 0px 4px #57534a;
  width: 85%;
  height: 50px;
  border-radius: 10px;
`

const NavBtn = styled.div`
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
  
  export default BtMatch ;