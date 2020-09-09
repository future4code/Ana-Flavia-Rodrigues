import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';




const PokeCard = props =>{
    // valor do estado que guarda infos e foto do pokemon
   const[pokemon,setpokemon] = useState({});
   const pegaPokemon = (pokeName) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response =>setpokemon(response.data.results))
    .catch(err => console.log(err))
   }
    // função que bate na poke API com um nome específico de pokemon
    // Isso permite que consigamos pegar as infos dos pokemons.
    // Nos métodos de ciclo de vida, ela é chamada passando como
    // parâmetro o nome de pokemon que está chegando como props.

  useEffect(() => { 
    pegaPokemon( pokemon.id)}, [pokemon.id]);
    const onepokemon = setpokemon;
    return (
      
      <div>
        <p>{onepokemon.name}</p>
        <p>{onepokemon.weight} Kg</p>
        {onepokemon.types && <p>{onepokemon.types[0].type.name}</p>}
        {onepokemon.sprites && (
          <img src={onepokemon.sprites.front_default} alt={onepokemon.name} />
        )}
      </div>
    );
  



  }


export default PokeCard;
