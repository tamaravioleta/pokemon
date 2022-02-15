import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import PokemonActions, { PokemonDataTypes } from '../reducers/pokemonReducer'

function* mySaga() {
  yield takeLatest(PokemonDataTypes.GET_POKEMON, fetchPokemon)
}

function* fetchPokemon(action) {
  function getPokemon (pokemonName) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  }
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
