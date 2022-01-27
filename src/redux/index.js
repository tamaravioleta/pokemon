// @flow
import { combineReducers, createStore } from 'redux'
import { reducer as pokemonReducer } from './reducers/pokemonReducer'

const initRedux = (initialState: any, options: any) => {
  const reducers = {
    pokemons: pokemonReducer
  }
  const rootReducer = combineReducers(reducers)

  return createStore(rootReducer, initialState)
}
export default initRedux
