import React from 'react';
import { useForm } from '../../hooks/useForm';
import { CreateContainer}  from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useProtectedPage} from '../../hooks/useProtectedPage/useProtectedPage'
import Header from '../../components/header/header';




const CreateTripPage= () => {

  const history = useHistory();

  const { form, onChange, resetState } = useForm({
  description: "",
  planet: "",
  durationInDays: "",
  name: "",
  date: ""
});
useProtectedPage()
const handleInputChange = (event) => {
  const { name, value } = event.target;

  onChange(name, value);
};

const onSubmitTrip = (event) => {
  event.preventDefault();
 
  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
}
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips',body ,{
    headers: {
      auth: window.localStorage.getItem('token')
    }
  }).then((reponse)=> {
    history.push("/trips/list")
  })
}
  

return (
  <CreateContainer onSubmit={onSubmitTrip} >
    <Header/>
    <h1>Criar Nova Viagem</h1>
    <input 
      value={form.name}
      name="name" 
      onChange={handleInputChange} 
      placeholder='Nome'>
    </input>
    <input 
      value={form.planet}
      name="planet" 
      onChange={handleInputChange} 
      placeholder='Planeta'>
    </input>
    <input 
      value={form.date}
      name="date" 
      onChange={handleInputChange}
      type="date" 
      placeholder='Data'>
    </input>
    <input 
      value={form.description} 
      name="description" 
      onChange={handleInputChange}
      type="textarea" 
      placeholder='Descrição'>
    </input>
    <input 
      value={form.durationInDays}
      name="durationInDays" 
      onChange={handleInputChange}
      type="number" 
      placeholder='Tempo de Permanência'>
    </input>
     <button>Criar</button>
  </CreateContainer>
  
);
} 


export default CreateTripPage;