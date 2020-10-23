import React, { useState } from 'react';
import {MainContainer} from './styled'
import {Container , DiaContainer} from '../Components/styled'
import { useEffect } from 'react';
import axios from 'axios';



const  PlannerPage = () => {
    const [task , setTask] = useState('');
    const [day , setDay] = useState('');
    const [id , setId] = useState('');
    const [listTask , setListTask] = useState([])
    

    const onChangeDay = event => {
        setDay(event.target.value);
      };

    const onChangeTask = event => {
        setTask(event.target.value);
      };

    
    const getTasks = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-flavia')
      .then((response) => {
        setListTask(response.data)
      })
    }

    useEffect(() => {
      getTasks()
    }, [])


   const createTask = () =>{
      const newTask = {text:task, day:day , id:id}
      setListTask([...listTask,newTask])

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

    const deleteTask = (id) =>{
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-flavia/${id}`)
      .then((response)=>{
        console.log(response.data)
      }).catch((error) => {
        console.log(error.response.data)
      })

    }

    

    const taskDom = (dia) =>{
      
     if (listTask.length>0){
       return(
        
         listTask.map((item)=>{
          // console.log(item.day , dia)
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
        <select  placeholder="Escolha um dia" value={day} onChange={onChangeDay}>
           <option selected="selected" class="Dia">Dia da Semana</option>
            <option  name='Dom'>Domingo</option>
            <option  name='Seg'>Segunda-feira</option>
            <option  name='Ter'>Terça-feira</option>
            <option  name='Qua'>Quarta-feira</option>
            <option  name='Qui'>Quinta-feira</option>
            <option  name='Sex'>Sexta-feira</option>
            <option  name='Sab'>Sabado</option>
        </select>
        
        <button onClick={createTask} >Criar Tarefa</button>

    </MainContainer>
    <Container>
        <DiaContainer data-testid="plannerday" >
           <h2>Domingo</h2> 
        <p>{taskDom('Domingo')}</p>
        </DiaContainer>
        <DiaContainer data-testid="plannerday" >
           <h2>Segunda-Feira</h2>
           {taskDom('Segunda-feira') }
        </DiaContainer>
        <DiaContainer data-testid="plannerday" >
           <h2>Terça-Feira</h2>
           {taskDom('Terça-feira')}
        </DiaContainer>
        <DiaContainer data-testid="plannerday" >
           <h2>Quarta-Feira</h2> 
            {taskDom('Quarta-feira')}
        </DiaContainer>
        <DiaContainer data-testid="plannerday" >
           <h2>Quinta-Feira</h2>
            {taskDom('Quinta-feira')} 
        </DiaContainer>
        <DiaContainer data-testid="plannerday">
           <h2>Sexta-Feira</h2> 
           {taskDom('Sexta-feira')}
        </DiaContainer>
        <DiaContainer data-testid="plannerday">
           <h2>Sabado</h2> 
          {taskDom('Sabado')}
        </DiaContainer>
      </Container> 
    </>
    ) 
}
export default PlannerPage;