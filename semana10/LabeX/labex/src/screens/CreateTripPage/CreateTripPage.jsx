import React from 'react';
import { useForm } from '../../hooks/useForm';
import { CreateContainer}  from './styled';



function CreateTripPage() {
  

return (
  <CreateContainer >
    <h1>Criar Nova Viagem</h1>
    <input 
      value={""} 
      onChange={()=>null} 
      placeholder='Nome'>
    </input>
    <input 
      value={""} 
      onChange={()=>null} 
      placeholder='Planeta'>
    </input>
    <input 
      value={""} 
      onChange={()=>null}
      type="date" 
      placeholder='Data'>
    </input>
    <input 
      value={""} 
      onChange={()=>null}
      type="textarea" 
      placeholder='Descrição'>
    </input>
    <input 
      value={""} 
      onChange={()=>null}
      type="number" 
      placeholder='Tempo de Permanência'>
    </input>
     <button>Criar</button>
  </CreateContainer>
);
} 


export default CreateTripPage;