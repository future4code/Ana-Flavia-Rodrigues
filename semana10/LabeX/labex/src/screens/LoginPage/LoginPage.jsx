import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/img/Logo.gif';
import axios from 'react';
import LoginContainer from './styled';



function LoginPage() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event) => {
    setSenha(event.target.value)
  }
  
  const getLogin  = () => null //função que vai chamr a API
  
  const body = {
    "email": email, //"astrodev@gmail.com.br",
	  "password": senha //"123456"
  }


  return (
   <LoginContainer>
    <h1>Login</h1>
    <input value={email} 
      onChange={handleEmail} 
      placeholder="e-mail">
    </input>

    <input value={senha}
      onChange={handleSenha} 
      placeholder="senha"
      type="password">
    </input>
     <button onClick={getLogin}>Enviar</button>

   </LoginContainer>


  );
  }
export default LoginPage;