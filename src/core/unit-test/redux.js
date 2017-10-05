import Immutable from 'immutable'

function testReducer(params, reducer) {
  const hasInitialState = 1
  let initialState = params[0]
  let action = params[1]

  if (params.length === hasInitialState) {
    initialState = Immutable.Map()
    action = params[0]
  }

  return reducer(initialState, action)
}

export function createTestReducer(reducer) {
  return (...params) => testReducer(params, reducer)
}
