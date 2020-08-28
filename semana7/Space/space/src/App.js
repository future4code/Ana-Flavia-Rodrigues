import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default class App extends React.Component {
  state = {
    listShip: [],
    imageShip: "",
    idShip:""
  };

  catchAllShips = () => {
    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((resposta) => {
        this.setState({ listShip: resposta.data});
        console.log(resposta.data)
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  catchOneShip = (id) => {
    axios
      .get(`https://api.spacexdata.com/v3/Ships/${id}`)
      .then((resposta) => {
        this.setState({imageShip: resposta.data.image});
                
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  catchShip = (evento) => {
    const nameShip = evento.target.value;
    this.catchOneShip(nameShip);
  };

  componentDidMount() {
    this.catchAllShips();
  }

  render() {
    return (
      <AppContainer>
        {this.state.imageShip && (
          <img alt={"Imagem"} src={this.state.imageShip} />
        )}
        <select onChange={this.catchShip}>
          <option value={""}></option>
          {this.state.listShip.map((item)=>{
            return(
              <option key={item.ship_id} value={item.ship_id}>
                {item.ship_name}
              </option>
            );
          })}
        </select>
        </AppContainer>
    );
  }
}
const AppContainer = styled.div`
text-align: center;
font-family: Philosopher, Arial;
`

