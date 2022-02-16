import { call, put, takeLatest } from 'redux-saga/effects'
import { getPokemon } from '../../services/api'
import PokemonActions, { PokemonDataTypes } from '../reducers/pokemonReducer'

function* mySaga() {
  yield takeLatest(PokemonDataTypes.GET_POKEMON, fetchPokemon)
}

function* fetchPokemon(action) {
  try {
    console.log(action)
    const pokemon = yield call(getPokemon, action.name)
    console.log(pokemon)
    yield put(PokemonActions.setPokemon(pokemon.data))
  } catch (e) {
    console.log(e)
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

export default mySaga
