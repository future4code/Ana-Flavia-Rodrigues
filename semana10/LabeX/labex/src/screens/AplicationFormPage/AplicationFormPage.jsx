import React from 'react';
import { useHistory } from 'react-router-dom';

function AplicationFormPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }
  return (
    <div >
        <h1>Página do Formulário</h1>
        <button onClick={goToHome}>Página Inicial</button>
    </div>
  );
}

export default AplicationFormPage;