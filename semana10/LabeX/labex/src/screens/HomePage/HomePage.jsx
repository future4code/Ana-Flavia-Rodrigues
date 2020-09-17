import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {MainContainer,ButtonContainer } from './styled';
import Logo from '../../assets/img/Logo.gif';
 

function HomePage() {
  const history = useHistory();

  const gotoLoginPage = () => {
    history.push("/login");
  }
  const gotoFormPage = () => {
    history.push("/application-form");
  }

   
  return (
    <MainContainer >
      <img src={Logo}/>
    <ButtonContainer>
      <button onClick={gotoLoginPage}>Fazer Login</button>
      <button onClick={gotoFormPage}>Ir para o formulário</button>
    </ButtonContainer>

    </MainContainer>
  );
}



  
//   return (
//     <div >
//         <p>Home Page</p>
//         <button onClick={gotoFormPage}>Ir para o formulário</button>
//         <button onClick={gotoLoginPage}>Fazer Login</button>
//     </div>
//   );
// }

export default HomePage;