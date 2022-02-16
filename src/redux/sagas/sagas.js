import { call, put, takeLatest } from 'redux-saga/effects'
import { getPokemon } from '../../services/api'
import PokemonActions, { PokemonDataTypes } from '../reducers/pokemonReducer'

export function* pokemonRequest() {
  yield takeLatest(PokemonDataTypes.POKEMON_REQUEST, pokemonRequestAPI)
}

export function* pokemonRequestAPI(action) {
  try {
    const pokemon = yield call(getPokemon, action.name)
    yield put(PokemonActions.pokemonSuccess(pokemon.data))
  } catch (e) {
    yield put(PokemonActions.pokemonFailure(e))
  }
}
