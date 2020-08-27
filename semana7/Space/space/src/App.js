import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default class App extends React.Component {
  state = {
    listDragon: [],
    imageDragon: ""
  };

  catchAllDragons = () => {
    axios
      .get("https://api.spacexdata.com/v3/dragons")
      .then((resposta) => {
        this.setState({ listDragon: resposta });
        console.log(resposta)
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  catchOneDragon = (id) => {
    axios
      .get(`https://api.spacexdata.com/v3/dragons/${id}`)
      .then((resposta) => {
        this.setState({ imageDragon: resposta});
        console.log(resposta)
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  catchDragon = (evento) => {
    const nameDragon = evento.target.value;
    this.catchOneDragon(nameDragon);
  };

  componentDidMount() {
    this.catchAllDragons();
  }

  render() {
    return (
      <AppContainer>
        {this.state.imageDragon && (
          <img alt={"Imagem"} src={this.state.imageDragon} />
        )}
        <select onChange={this.catchDragon}>
          <option value={""}></option>
          {this.state.listDragon.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
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