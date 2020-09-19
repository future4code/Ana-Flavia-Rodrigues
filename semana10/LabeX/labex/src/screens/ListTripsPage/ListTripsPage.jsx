import React, { useEffect, useState  } from 'react';
import useRequestData from '../../hooks/useRequestData';
import axios from 'axios';
import {CardTrip , CardTripContainer} from './styled';
import { useHistory } from 'react-router-dom';  


function ListTripsPage() {
    const history = useHistory();
    const gotoFormPage = () => {
      history.push("/application-form");
    }
   


  const [trips , setTrips] = useState([])

  useEffect(() => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips")
    .then((resposta) => {
      console.log(resposta.data.trips)
      setTrips(resposta.data.trips)
      
    })
    .catch((erro) => {
      console.log(erro);
    });
    

  },[])

  const changeClickedShowName = (name) => {
    setTrips({clickedShowName: name});
  };

  const listTrip = trips.map((trip) => {
    return(
      <CardTrip onClick={gotoFormPage} changeShowName={changeClickedShowName}>
       <h2>{trip.name}</h2>
       <h3>{trip.description}</h3>   
       <p>Destino: {trip.planet}</p>
       <p>Data de Saída: {trip.date}</p>
       <p>Data de Saída: {trip.durationInDays}</p> 
      </CardTrip>
      
    )
  })

  
   return (
     <CardTripContainer>
       
       {listTrip}
     </CardTripContainer>
   )
    
}



export default ListTripsPage;