import React, { useEffect, useState } from 'react';
import  useHistory  from 'react-router-dom';
import Logo from '../../assets/img/Logo.gif';
import axios from 'react';
import LoginContainer from './styled';



export default function LoginPage(props){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event) => {
    setSenha(event.target.value)
  }
  
  

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: senha
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/login', body).then((response) => {
      console.log(response.data)
    })
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
      <button onClick={onSubmitLogin}>Enviar</button>
   </LoginContainer>


  );
  }
