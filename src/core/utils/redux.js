import { fromJS } from 'immutable'
import find from 'lodash/find'
import merge from 'lodash/merge'
import reduce from 'lodash/reduce'
import zipObject from 'lodash/zipObject'
import camelCase from 'lodash/camelCase'
import isObject from 'lodash/isObject'
import mapValues from 'lodash/mapValues'

export function createReducer(initialState, actions) {
  return (state = initialState, action) => {
    const reducer = actions[action.type]
    return reducer ? reducer(state, action) : state
  }
}

export function buildReducer(actions, initialState) {
  return createReducer(initialState, actions)
}

export function reduceReducer(state, action) {
  return (parentState, actionHandler, stateName) => ({
    ...parentState,
    ...{ [stateName]: actionHandler(parentState[stateName], action) }
  })
}

export function combineReducers(root, reducers) {
  return (state, action) => reduce(reducers, reduceReducer(state, action), root(state, action))
}

export function createAction(type, names) {
  return (...params) => ({ type, ...zipObject(names, params) })
}

export function reduceActionTypes(prefix, actionTypes) {
  return reduce(actionTypes, (acc, fn, type) => ({
    ...acc, [type]: `${prefix}/${type}`
  }), {})
}

export function reduceActions(prefix, actionTypes) {
  return reduce(actionTypes, (acc, params, type) => ({
    ...acc, [camelCase(type)]: createAction(`${prefix}/${type}`, params)
  }), {})
}

export const buildActions = (prefix, actionTypes) => ({
  actions: reduceActions(prefix, actionTypes),
  actionTypes: reduceActionTypes(prefix, actionTypes)
})

export function updateState(property) {
  if (isObject(property)) {
    const key = Object.keys(property)[0]

    return state => ({ ...state, [key]: property[key] })
  }

  return (state, action) => ({ ...state, [property]: action[property] })
}

export function mergeParamWithState(param) {
  return (state, action) => ({ ...state, [param]: action[param] })
}

export function findMerge(list, newItem) {
  merge(find(list, { id: newItem.id }), newItem)
  return list
}

export function upsert(list, item) {
  const currentModel = find(list, { id: item.id })

  if (currentModel) {
    merge(currentModel, item)
    return [...list]
  }

  return [...list, item]
}

export function upsertUpdater(newItem) {
  return (list) => {
    const newItemMap = fromJS(newItem)
    const index = list.findEntry(item => item.get('id') === newItem.id)

    return index ? list.setIn([index[0]], newItemMap) : list.unshift(newItemMap)
  }
}

export function bindSelector(domain, selectors) {
  return mapValues(selectors, selector => state => selector(state[domain]))
}

export function update(model, property) {
  return (state, action) => (
    { ...state, [model]: { ...state[model], [property]: action[property] } }
  )
}
