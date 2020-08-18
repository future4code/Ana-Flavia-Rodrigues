import React from 'react';
import styled from "styled-components";

export class Etapa1 extends React.Component{
render() {
  
  return (
  <div>
  <h1>ETAPA1 - DADOS GERAIS</h1>
  <p>1. Qual o seu nome?</p>
  <input ></input> 
     
  <p>2. Qual a sua idade?</p>
    <input></input>
     
  <p>3. Qual o seu e-mail?</p>
    <input></input>
     
  <p>4. Qual a sua escolaridade?</p>
    <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
    </select>
  </div>
  );
};
};
export default Etapa1
