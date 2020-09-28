import React from 'react';
import { CardContainerTrip } from './styled/styled';
import TripDetailsPage from './TripDetailsPage'

const CardTrip = (props) => {
  
  return (
      
    <CardContainerTrip>
        <h2>Informações da Viagem</h2>
            <p>Nome:{props.info.name}</p> 
            <p>Destino:{props.info.planet} </p>
            <p>Data de Saída:{props.info.date} </p>
            <p>Descrição:{props.info.description} </p>
            <p>Duração em dias:{props.info.durationInDays} </p>     
    </CardContainerTrip>
  );
}

export default CardTrip;