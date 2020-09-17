import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/img/Logo.gif';
import axios from 'react';


function LoginPage() {

  const [login, setlogin] = useState([]);
  const body = {
    "email": "astrodev@gmail.com.br",
	  "password": "123456"
  }

    // useEffect(() => {
    //   axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login", body)
    //   .then
    // })

    const history = useHistory();
    const gotoLogin = () => {
      history.push("/")
    }
    const gotoFormPage = () => {
      history.push("/application-form");
    }
  return (
   <div></div>
  );
}
export default LoginPage;