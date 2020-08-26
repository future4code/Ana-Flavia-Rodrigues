import React from 'react';
import axios from "axios";
import styled from 'styled-components';


export default class ListarNomeUsuarios extends React.Component {
    state = {
      usuario:[
        {
         id: 1,
         name: "Frida" 
        },
        {
          id: 2,
          name: "Mulher Maravilha" 
         }
            ]
    };
    // // pegarNomeUsuarios = () =>{
    
    // //     const request = axios.get(
    // //       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    // //         {
    // //           headers:{
    // //             Authorization: "Ana-Flavia-Jackson"
    // //           }
    // //         }
    // //       );
        
    // //       request
    // //         .then((resposta) => {
    // //           this.setState({ name: resposta.data });
    // //         })
    // //         .catch((erro) => {
    // //           console.log("Ocorreu um erro");
    // //         });
        
    //   }
    
    render() {
      return (
      <div>
        {this.state.usuario.map(user =>{
          return (
          <p key={user.id}>
            {user.name}
          </p>)
        })}
      </div>
      )
  }
}
const Form = styled.div`
border-radius: 5px;
padding: 5px;
box-shadow: 0px 0px 4px #57534a;
height: 300px;
width: 400px;
margin:0 auto;
align-items:center;
  h5 {
    color: #57534a;
    text-align: center;
    font-family: Philosopher, Arial;
}
`
const Input = styled.input`
height: 30px;
width: 150px;
display: flex;
border-radius: 5px;
margin: 0 auto;
`