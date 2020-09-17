import React from 'react';
import useRequestData from '../../hooks/useRequestData';

function ListTripsPage() {
  const minhaAtividade = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips",
    {}
  );

  return (
    
    <div className="App">
      <p>{minhaAtividade.photo}</p>
      
    </div>
  );
}



export default ListTripsPage;