import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const sagaMiddleware = createSagaMiddleware()
const middleware = [
  sagaMiddleware,
  routerMiddleware(browserHistory)
]

const store = composeEnhancers(applyMiddleware(...middleware))(createStore)
const defaultReducers = { routing }

export default store(combineReducers(defaultReducers))
export { sagaMiddleware, defaultReducers }
