import React, { useEffect, useState } from 'react';
import LoginContainer from './styled';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


export default function LoginPage(){

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event) => {
    setSenha(event.target.value)
  }
  const gotoListTripsPage = (event) => {
    history.push('/trips/list');
  }
  

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: senha
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/login', body)
    .then((response) => {
      
      window.localStorage.setItem('token', response.data.token)
      gotoListTripsPage()
    })
    .catch((erro) => {
      alert("Você não tem autorização para acessar essa página");
    });
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
