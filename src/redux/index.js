// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as pokemonReducer } from './reducers/pokemonReducer'
import createSagaMiddleware from 'redux-saga'
import { allSagas } from './sagas'


const initRedux = (initialState: any, options: any) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const reducers = {
    pokemons: pokemonReducer
  }
  const rootReducer = combineReducers(reducers)
  
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(allSagas)
  return store
}

export default initRedux
