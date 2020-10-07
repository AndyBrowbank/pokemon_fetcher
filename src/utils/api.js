import axios from "axios";

export const getImage = (id) => {
  console.log("ID===", id);
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id} `).then((res) => {
    const pokemonImage = res.data.sprites.other.dream_world.front_default;

    return pokemonImage;
  });
};

export const getPokemonName = (id) => {
  console.log("in getPokemonName");
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id} `).then((res) => {
    const pokemonName = res.data.forms[0].name;
    return pokemonName;
  });
};
