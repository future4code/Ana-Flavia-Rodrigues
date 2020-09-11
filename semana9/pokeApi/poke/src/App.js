import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import PokeCard from "./components/PokeCard";


const App = props => {
      // lista de pokemons que está sendo guardada no estado
      const [pokelist,setpokeList] = useState([]);
      // nome do pokemon guardado no estado, assim que o usuário
      // escolhe um nome no dropdown
      const [pokeName,setpokeName] = useState(""); 
    useEffect(
      () => {
        axios.get
          ("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then
          (response =>{setpokeList(response.data.results)})
        .catch
        (err =>{console.log(err)})  
      },["https://pokeapi.co/api/v2/pokemon/?limit=151",setpokeList]
      );

  const changePokeName = (event) => {
    setpokeName(event.target.value);
  };
  
    return (
<div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>    );
 
}

export default App;

