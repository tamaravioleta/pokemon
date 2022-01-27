import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getAllPokemon: ['data', 'abc'],
})

export const PokemonDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  data: []
}

/* ------------- Reducers ------------- */
export const getPokemons = (state, action) => {
  console.log(action)
  return {
    ...state,
    data: ['123', '456']
  }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_POKEMON]: getPokemons
})
