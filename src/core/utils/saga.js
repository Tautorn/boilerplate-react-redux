/* eslint-disable */
import get from 'lodash/get'
import { delay } from 'redux-saga'
import { spawn, call, put } from 'redux-saga/effects'

export const makeRestartable = (saga,actions) => function* () {

  const store = require('../../store').default

  yield spawn(function* () {
    while (true) {
      try {
        yield call(saga)
      } catch (error) {
        if (get(error, 'response.status')) {
          const msgError = get(error, 'response.data.message')
          yield put(Toaster.toggle('general.failure.occurred', msgError, 'danger'))
        } else {
          console.error(error)
        }
      }

      yield delay(1000)
    }
  })
}
