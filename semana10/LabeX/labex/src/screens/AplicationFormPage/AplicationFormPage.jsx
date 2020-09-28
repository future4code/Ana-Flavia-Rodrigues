import React from "react";
import { useForm } from "../../hooks/useForm";
import {FormContainer, Input, TextArea , Select} from "./styled"
import ListTripsPage from "../ListTripsPage/ListTripsPage"

export default function AplicationFormPage(props) {
  

  const { form, onChange, resetState } = useForm({
    primeiroNome: "",
    idade: 0,
    profissao: "",
    motivo:"",
    pais:""
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();

    console.log(form);
    resetState();
  };
  
  return (
    
    <FormContainer>
      
      <form onSubmit={handleSubmittion}>
      <h2>{props.trip}</h2>
       <h5>Nome do Candidato:</h5>
        <Input
          value={form.primeiroNome}
          name="primeiroNome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="Nó minimo 3 letras"
          required
        />

       <h5>Idade:</h5>
        <Input
          value={form.idade}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          required
        />

       <h5>Profissão:</h5> 
        <Input
          value={form.profissao}
          name="profissao"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{10,}"
          title="No minimo 10 letras"
          required
        />

      <h5>Pais:</h5>
        <Select
          value={form.pais}
          name="pais"
          onChange={handleInputChange}
          type="pais"
          required
        />

      <h5>Porque devemos escolher você?:</h5>
        <TextArea
          value={form.motivo}
          name="motivo"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{30,}"
          title="No minimo 30 letras"
          required
        />

        <p><button>Enviar</button></p>
      </form>
    </FormContainer>
  );
}