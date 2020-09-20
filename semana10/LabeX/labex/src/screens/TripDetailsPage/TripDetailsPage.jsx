import React from 'react';
import { MainContainer } from '../HomePage/styled';
import CardCandidate from './CardCandidate';
import CardTrip from './CardTrip';
import { DetailContainer } from './styled/styled';


function TripDetailsPage() {
  return (
    <DetailContainer >
      <h1>Detalhes da Viagem</h1>
        <CardTrip/>
        <CardCandidate/>
    </DetailContainer>
  );
}

export default TripDetailsPage;