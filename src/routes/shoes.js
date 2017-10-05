import React from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import { fork } from 'redux-saga/effects'

import shoesReducer from 'state/Shoes/reducer'
import shoesSaga from 'state/Shoes/saga'

import Shoes from '../container/Shoes'
import { replaceReducers, runSagas } from './utils'

function* applicationSagas() {
  yield fork(shoesSaga)
}

function onEnter() {
  const reducersObj = {
    shoesReducer
  }

  const stores = combineReducers(reducersObj)
  replaceReducers({ stores })
  runSagas(applicationSagas)
}

const router = (
  <Route path="shoes" onEnter={onEnter} component={Shoes} />
)

export default router
