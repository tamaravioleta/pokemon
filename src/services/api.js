import { Axios } from "axios"

export const getPokemon = (pokemonName) => {
  return Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
}