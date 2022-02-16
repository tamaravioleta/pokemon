import { all, call } from "redux-saga/effects";
import { pokemonRequest } from "./sagas";

export function* allSagas () {
  yield all([call(pokemonRequest)])
}