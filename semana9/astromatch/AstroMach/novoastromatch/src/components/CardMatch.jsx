import React,  { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getMatches} from '../constants/callApi';

export const CardMatch = () => {
  const [match, setMatch]= useState([])

  useEffect(() => {
    
    getMatches(setMatch);
    }, []);

    const matches = match.map( (mat) => {
    return(
      <Main >
         <img src={mat.photo}/>
         <h3>{mat.name}</h3>
      </Main>

        )
      })

  return (
    
    <Card>
          {matches}
    </Card>

  )};
const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center; 
font-family: Arial;
padding: 0.5vw;;
margin: 0 auto  ;
margin-top: 15px;
border: 1px solid #000;
box-shadow: 4px 0px 4px #57534a;
width: 30%;
height: 100%;
border-radius: 10px;
button {
  background-color: violet;
  color: #fff;
  width: 100px;
  box-shadow: 4px 0px 4px #57534a;
  border-radius: 10px;
}
`
const Main = styled.div`
display:flex;
justify-content: space-around;
flex-direction:row;
align-items:center;
font-family: Arial;
padding: 0.5vw;;
margin-top: 15px;
border: 1px solid #000;
box-shadow: 4px 0px 4px #57534a;
width: 80%;
height: 50px;
border-radius: 10px;
button {
  background-color: violet;
  color: #fff;
  width: 80px;
  box-shadow: 4px 0px 4px #57534a;
  border-radius: 10px;
}

  img{
    background-color: #ddd;
    border-radius: 100%;
    height: 50px;
    object-fit: cover;
    width: 50px;

  }

  h3{
    font-family: 'Poppins', sans-serif;
    font-size: calc(8px + 0.4vw);
    font-weight: bold;
    color: #f06f5c;
  }
`  
  
  export default CardMatch ;