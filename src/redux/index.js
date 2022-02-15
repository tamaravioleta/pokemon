// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as pokemonReducer } from './reducers/pokemonReducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'


const initRedux = (initialState: any, options: any) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const reducers = {
    pokemons: pokemonReducer
  }
  const rootReducer = combineReducers(reducers)
  
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(mySaga)
  return store
}

export default initRedux
