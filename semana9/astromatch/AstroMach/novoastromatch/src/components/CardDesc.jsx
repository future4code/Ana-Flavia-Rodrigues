import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProfile , getMatches } from '../constants/callApi';
import axios from "axios";
import { Button } from '@material-ui/core';
import coracao from '../assets/coracao.png'
import cancelado from '../assets/cancelado.png'



export const FotoDesc = () => {
  const [person, setPerson] = useState(null);

  const postChoose = () => {
    const body= {
      id:"",
	    choice: 'true'
    }
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:flavia/choose-person", body)
      .then((response) => {
       
        window.alert(`DEU MATCH`)
        getProfile(setPerson);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  useEffect(() => {
    
    getProfile(setPerson);
    }, []);
  
  

    const Id = (person && person.data.profile.id);
  return (
    
    <Foto>
      <img src={person && person.data.profile.photo}/>
      <h3>{person && person.data.profile.name} ,{person && person.data.profile.age}</h3>
      <p>{person && person.data.profile.bio}</p>
      <BtMatch>

        <Bt src={coracao} onClick={()=>{postChoose(Id)}}/>
        <Bt src={cancelado} onClick={()=>{getProfile(setPerson)}}/>
        
      </BtMatch>
   </Foto>

  );
}

const BtMatch = styled.div`
display: flex;
  align-items : center;
  justify-content: space-around;
  padding: 0 25px;
  margin: 0 auto  ;
  margin-top: 15px;
`

const Foto = styled.div`
background-color: #fff;
color:#ff5c5c;
display:flex;
flex-direction:column;
align-items:center;
font-family: Arial;
padding: 0.5vw;
margin: 0 auto  ;
margin-top: 5px;
border: 1px solid #000;
box-shadow: 4px 0px 4px #57534a;
width: 30%;
height: 500px;
border-radius: 10px;
  button {
    background-color: violet;
    color: #fff;
    width: 100px;
    box-shadow: 4px 0px 4px #57534a;
    border-radius: 10px;
    }

  h5 {
    text-indent: 2em;
    text-align: justify;
  }

  img {
    size="95%";
    max-width:90%;
    max-height:300px;
  }
`
const Bt = styled.img`
  width: 50px;
  align-items : center;
  justify-content: space-around;
  padding: 0 5px;
  margin-top: 5px;
  `

  export default FotoDesc ;