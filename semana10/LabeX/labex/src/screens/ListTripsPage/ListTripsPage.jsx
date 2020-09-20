import React, { useEffect, useState  } from 'react';
import useRequestData from '../../hooks/useRequestData';
import axios from 'axios';
import {CardTrip , CardTripContainer} from './styled';
import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom' 


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
      
      <Link to={`/trips/details/${trip.id}`}>
      <CardTrip onClick={gotoFormPage} >
       <h2>{trip.name}</h2>
       {/* <h3>{trip.description}</h3>   
       <p>Destino: {trip.planet}</p>
       <p>Data de Saída: {trip.date}</p>
       <p>Data de Saída: {trip.durationInDays}</p>  */}
      </CardTrip>
      </Link>
    )
  })

  
   return (
     <CardTripContainer>
       <h1>Lista de Viagens</h1>
       <button>Criar Viagem</button>
       {listTrip}
     </CardTripContainer>
   )
    
}



export default ListTripsPage;