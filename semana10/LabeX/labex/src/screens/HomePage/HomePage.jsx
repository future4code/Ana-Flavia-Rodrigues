import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const gotoLoginPage = () => {
    history.push("/login");
  }
  const gotoFormPage = () => {
    history.push("/application-form");
  }
  
  return (
    <div >
        <p>Home Page</p>
        <button onClick={gotoFormPage}>Ir para o formulário</button>
        <button onClick={gotoLoginPage}>Fazer Login</button>
    </div>
  );
}

export default HomePage;