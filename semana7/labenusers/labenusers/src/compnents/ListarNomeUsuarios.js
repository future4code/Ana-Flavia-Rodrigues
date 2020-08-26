import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import {baseUrl, axiosConfig} from '../constants/axiosConstants';


export default class ListarNomeUsuarios extends React.Component {
    state = {
      usuario:[ ]
    };

    componentDidMount = () => {
      this.pegarNomeUsuarios();
    };

    pegarNomeUsuarios = () =>{
    
        const request = axios.get(
          baseUrl ,axiosConfig
          );
        
          request
            .then((resposta) => {
              this.setState({ usuario: resposta.data });
            })
            .catch((erro) => {
              console.log("Ocorreu um erro!");
            });
        
      }

      deleteUsuario = (userId) => {
        
        axios
          .delete(`${baseUrl}/${userId}`, axiosConfig)
          .then((resposta) => {
            this.pegarNomeUsuarios();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
    
    render() {
      return (
      <div>
        {this.state.usuario.map((user) =>{
          return (
          <p key={user.id}>
            {user.name}
            <DeleteButton onClick={() => { if (window.confirm('Tem certeza que quer deletar esse item?')) this.deleteUsuario(user.id) } }>
                {" "}
                X
             </DeleteButton>
          </p>)
        })}
      </div>
      )
  }
}


const DeleteButton = styled.span`
  color: red;
`;