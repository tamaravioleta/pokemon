import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getAllPokemon: ['data', 'abc'],
  setPokemonName: ['newPokemon']
})

export const PokemonDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  data: [],
  pokemonName: ''
}

/* ------------- Reducers ------------- */
export const getPokemons = (state, action) => {
  console.log(action)
  return {
    ...state,
    data: ['123', '456']
  }
}

export const setPokemonName = (state, action) => {
  return {
    ...state,
    pokemonName: action.newPokemon
  }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_POKEMON]: getPokemons,
  [Types.SET_POKEMON_NAME]: setPokemonName,
})
