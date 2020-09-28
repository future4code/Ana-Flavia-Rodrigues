import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {MainContainer,ButtonContainer,Container} from './styled';
import Logo from '../../assets/img/Logo.gif';
 

function HomePage() {
  const history = useHistory();

  const gotoLoginPage = () => {
    history.push("/login");
  }
  const gotoAplicationFormPage = () => {
    history.push("/application-form");
  }

   
  return (
    <MainContainer >
      <Container>
        <img src={Logo}/>
          <ButtonContainer>
            <button onClick={gotoAplicationFormPage}>Quero Viajar!</button>
            <button onClick={gotoLoginPage}>Fazer Login</button>
          </ButtonContainer>
      </Container>

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