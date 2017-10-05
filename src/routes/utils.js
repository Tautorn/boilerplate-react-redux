import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import { makeRestartable } from 'core/utils/saga'
import store, { sagaMiddleware, defaultReducers } from '../store'

let currentSaga
export function replaceReducers(reducers) {
  return store.replaceReducer(combineReducers({ ...reducers, ...defaultReducers }))
}

export function runSagas(sagas) {
  if (currentSaga) {
    currentSaga.cancel()
  }

  currentSaga = sagaMiddleware.run(makeRestartable(function* run() {
    yield fork(sagas)
  }))
}
