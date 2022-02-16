import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getAllPokemon: ['data', 'abc'],
  setPokemon: ['pokemons'],
  deletePokemon: ['nameToBeDeleted'],

  pokemonRequest: ['name'],
  pokemonSuccess: ['data'],
  pokemonFailure: ['err'],
})

export const PokemonDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  data: ['charmander', 'bulbasaur', 'squirtle', 'charmander']
}

/* ------------- Reducers ------------- */
export const getPokemons = (state, action) => {
  console.log(action)
  return {
    ...state,
    data: ['123', '456']
  }
}

export const setPokemon = (state, action) => {
  return {
    ...state,
    data: action.pokemons
  }
}

export const getPokemon = (state) => {
  return state
}

export const deletePokemon = (state, action) => {
  const nameToBeDeleted = action.nameToBeDeleted
  const pokemons = state.data

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name !== nameToBeDeleted)
  return {
    ...state,
    data: filteredPokemons
  }
}

export const pokemonRequest = (state, action) => {
  return {
    ...state,
    isFetching: true,
    error: null,
    data: []
  }
}

export const pokemonSuccess = (state, action) => {
  const data = action.data
  return {
    ...state,
    isFetching: false,
    error: null,
    data
  }
} 

export const pokemonFailure = (state, action) => {
  return {
    ...state,
    isFetching: false,
    data: [],
    error: action.err
  }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_POKEMON]: getPokemons,
  [Types.SET_POKEMON]: setPokemon,
  [Types.DELETE_POKEMON]: deletePokemon,
  [Types.POKEMON_REQUEST]: pokemonRequest,
  [Types.POKEMON_SUCCESS]: pokemonSuccess,
  [Types.POKEMON_FAILURE]: pokemonFailure,
})
