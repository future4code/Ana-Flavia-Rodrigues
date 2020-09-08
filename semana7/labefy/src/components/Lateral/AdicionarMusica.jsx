import React from 'react';
import axios from 'axios';
import {Nome,AdicionarContainer} from './estilos'
import {baseUrl,axiosConfig} from '../../constants/axiosConstants'


export default class AdicionarMusica extends React.Component {
  
  state = {
    listaPlay: [],
    nomePlay: "",
    nameValue:"",
    artistValue:"",
    urlValue:""
  };

  pegarPlaylist = () => {
    axios
      .get(baseUrl,axiosConfig)
      .then((resposta) => {
        
        this.setState({ listaPlay: resposta.data.result.list });
        
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  pegarDadosPlaylist = (name) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`,axiosConfig)
      .then((resposta) => {
        console.log(resposta.data.result.playlist)
        this.setState({ idPlay: resposta.data.result.playlist});
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  selecionouPlaylist = (evento) => {
    const idPlaylist = evento.target.value;
    this.pegarDadosPlaylist(idPlaylist);
    
  };

  componentDidMount() {
    this.pegarPlaylist();
  }
    inserirMusica = () =>{
    
    const body = {
      name: this.state.nameValue,
      artist: this.state.artistValue,
      url: this.state.urlValue,
    }
    const request = axios
    .post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/cafezinho/tracks`,body,axiosConfig
      );
    
     request
        .then((resposta) => {
          this.setState({ name: resposta.data});
          alert('Musica incluida com sucesso');
        })
        .catch((erro) => {
          alert("Ocorreu um erro");
        })
      }

      

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
      }
    
    onChangeArtistValue = (event) => {
        this.setState({artistValue: event.target.value})
      }
    onChangeUrlValue = (event) => {
        this.setState({urlValue: event.target.value})
      }
  render() {
    return (
      <AdicionarContainer>

        <select onChange={this.selecionouPlaylist}>
          <option value={""}></option>
          {this.state.listaPlay.map((musica) => {
            return (
              <option key={musica.id} value={musica.name}>
                {musica.name}
              </option>
            );
          })}
        </select>
        <input value={this.setState.nameValue}
        onChange={this.onChangeNameValue} 
        placeholder="Nome da Musica"/>

        <Nome>Digite o nome do artista: </Nome>

         <input value={this.setState.artistValue}
         onChange={this.onChangeArtistValue}
          placeholder="Artista"/>

         <Nome>Digite o link da musica: </Nome>

         <input value={this.setState.urlValue}
         onChange={this.onChangeUrlValue} 
         placeholder="Link da Musica"/>
         <button onClick={this.inserirMusica}>Adicionar</button>
         </AdicionarContainer>
    );
  }
        
 }
