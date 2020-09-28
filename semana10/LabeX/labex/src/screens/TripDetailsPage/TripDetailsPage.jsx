import React, { useEffect, useState } from 'react';
import { MainContainer } from '../HomePage/styled';
import CardCandidate from './CandidateItem';
import CardTrip from './CardTrip';
import{ DetailContainer}  from './styled/styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CandidatesList  from './CandidateList';
import {useProtectedPage} from '../../hooks/useProtectedPage/useProtectedPage'


const TripDetailsPage = () => {

  const [trip, setTrip] = useState()
  const params = useParams()

  useProtectedPage()

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trip/${params.Id}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips/${params.Id}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    })
  }

  return <div>
     <h1>Detalhes da Viagem</h1>
      {trip ? <DetailContainer>
      <CardTrip info={trip}/>
      <CandidatesList 
        candidates={trip.candidates} 
        decideCandidate={decideCandidate}
      />
      </DetailContainer> : <div>Carregando...</div>}
  </div>
}

export default TripDetailsPage;