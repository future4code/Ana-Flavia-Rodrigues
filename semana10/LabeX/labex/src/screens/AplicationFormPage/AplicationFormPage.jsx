import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import {FormContainer, Input, TextArea , Select , Container} from "./styled"
import axios from "axios"
import Header from "../../components/header/header";

export default function AplicationFormPage(props) {

  const [trips , setTrips] = useState([])

  useEffect(() => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips")
    .then((resposta) => {
      
      setTrips(resposta.data.trips)
      
    })
    .catch((erro) => {
      console.log(erro);
    });
    

  },[])
  

  const { form, onChange, resetState } = useForm({
    primeiroNome: "",
    idade: 0,
    profissao: "",
    motivo:"",
    pais:"",
    viagem: ""
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    
  const body = {
    name: form.primeiroNome,
    age: form.idade,
    applicationText: form.motivo,
    profession: form.profissao,
    country: form.pais
  }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/flavia/trips/${form.viagem}/apply`,body)
    
    resetState();
   };
  
  return (
    
    <FormContainer>
      <Header/>
      <h1>Cadastrar-se Para Viagem</h1>
      <form onSubmit={handleSubmittion}>
      {/* <h2>{props.trip}</h2> */}
      <Container>
       <Input
          placeholder= "Nome do Candidato"
          value={form.primeiroNome}
          name="primeiroNome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="No minimo 3 letras"
          required
        />

       
        <Input
          placeholder= "Idade"
          value={form.idade}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          required
        />

       
        <Input
          placeholder= "Profissão"
          value={form.profissao}
          name="profissao"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{10,}"
          title="No minimo 10 letras"
          required
        />

      
        <Select
          placeholder= "Viagem"
          value={form.viagem}
          name="viagem"
          onChange={handleInputChange}
          type="text"
          required
        >
          {trips.map((trip) => {
            return <option value={trip.id}>{trip.name}</option>
          })}
         
        </Select> 

        <Select
          placeholder= "Pais"
          value={form.pais}
          name="pais"
          onChange={handleInputChange}
          type="text"
          required
        >
          <option value='Brasil' >Brasil</option>
          <option value='EUA'>EUA </option>
        </Select>          

     
        <TextArea
          placeholder= "Porque devemos escolher você?:"
          value={form.motivo}
          name="motivo"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{30,}"
          title="No minimo 30 letras"
          required
        />

        <p><button type='submit'>Enviar</button></p>
        </Container>
      </form>
    </FormContainer>
  );
}