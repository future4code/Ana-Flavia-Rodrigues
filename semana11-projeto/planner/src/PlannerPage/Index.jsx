import React, { useState } from 'react';
import {MainContainer} from './styled'
import {Container , Dias} from '../Components/styled'
import { useEffect } from 'react';
import axios from 'axios';



const  PlannerPage = () => {
    const [task , setTask] = useState('');
    const [day , setDay] = useState('');
    const [listTask , setListTask] = useState([])

    const onChangeDay = event => {
        setDay(event.target.value);
      };

    const onChangeTask = event => {
        setTask(event.target.value);
      };

    const onListTask = () => {
       const newTask = {text:task,day:day}
        setListTask([...listTask,newTask])

    }  
   const createTask = () =>{
      const body = {
        text: task,
        day: day
      }
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-flavia', body)
      .then((response)=>{
        console.log(response.data)
      }).catch((error)=>{
        console.log(error.response.data)
      })
    }

    // useEffect(()=>{
    //   onListTask() 
    // },[])
    

    const taskDom = (dia) =>{
      
     if (listTask.length>0){
      
      console.log('Passou if')
      
       return(
        
         listTask.map((item)=>{
          console.log(item.day , dia)
           return(
             item.day === dia && <p>{item.text}</p>
         
           )
    
         })
       ) 
     } 
     
    }


    

    return(
    <>
      <MainContainer>
         Nova Tarefa:
        <input value={task} onChange={onChangeTask} name='tarefa' placeholder="Digite uma nova tarefa"></input>
        <select value={day} onChange={onChangeDay}>
            <option  name='Dom'>Domingo</option>
            <option  name='Seg'>Segunda-feira</option>
            <option  name='Ter'>Terça-feira</option>
            <option  name='Qua'>Quarta-feira</option>
            <option  name='Qui'>Quinta-feira</option>
            <option  name='Sex'>Sexta-feira</option>
            <option  name='Sab'>Sabado</option>
        </select>
        
        <button onClick={onListTask } >Criar Tarefa</button>

    </MainContainer>
    <Container>
        <Dias>
           <h2>Domingo</h2> 
           
          {taskDom('Domingo')}
          
        </Dias>
        <Dias>
           <h2>Segunda-Feira</h2>
           {taskDom('Segunda-feira')}
        </Dias>
        <Dias>
           <h2>Terça-Feira</h2>
           {taskDom('Terça-feira')}
        </Dias>
        <Dias>
           <h2>Quarta-Feira</h2> 
           {taskDom('Quarta-feira')}
        </Dias>
        <Dias>
           <h2>Quinta-Feira</h2>
           {taskDom('Quinta-feira')} 
        </Dias>
        <Dias>
           <h2>Sexta-Feira</h2> 
           {taskDom('Sexta-feira')}
        </Dias>
        <Dias>
           <h2>Sabado</h2> 
           {taskDom('Sabado')}{createTask}
        </Dias>
      </Container> 
    </>
    ) 
}
export default PlannerPage;