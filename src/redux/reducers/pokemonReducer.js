import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getAllPokemon: ['data', 'abc'],
  getPokemon: ['name'],
  setPokemon: ['pokemons'],
  deletePokemon: ['nameToBeDeleted']
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

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_POKEMON]: getPokemons,
  [Types.GET_POKEMON]: getPokemon,
  [Types.SET_POKEMON]: setPokemon,
  [Types.DELETE_POKEMON]: deletePokemon
})
