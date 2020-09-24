import React from 'react';
import {MainContainer} from './styled'


const  PlannerPage = () => {
    
    return(
      <MainContainer>
         Nova Tarefa:
        <input></input>
        <select>
            <option>Segunda-feira</option>
            <option>Terça-feira</option>
            <option>Quarta-feira</option>
            <option>Quinta-feira</option>
            <option>Sexta-feira</option>
            <option>Sabado</option>
            <option>Domingo</option>
        </select>
        <button>Criar Tarefa</button>
    </MainContainer>
    ) 
}
export default PlannerPage;