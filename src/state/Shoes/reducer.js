import { createReducer } from 'core/utils/redux'
import { types } from './actions'

const initState = {
  form: {},
  shoes: []
}

const reducer = {
  [types.UPDATE_FIELD_FORM](state, { data }) {
    return { ...state, form: { ...state.form, ...data } }
  },
  [types.LIST_SHOES](state, { data }) {
    return { ...state, shoes: data }
  },
  [types.LOADED_SHOES](state, { res }) {
    return { ...state, shoes: res.data }
  }
}

export default createReducer(initState, reducer)
