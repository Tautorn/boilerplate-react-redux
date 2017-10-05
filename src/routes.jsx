import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import IntlProviderWrapper from './core/components/IntlProviderWrapper'
import Main from './container/Main'
import Shoes from './routes/shoes'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

const bashPath = '/'

const Routes = () => (
  <Provider store={store}>
    <IntlProviderWrapper>
      <Router history={history}>
        <Route path={bashPath}>
          <IndexRoute component={Main} />
          { Shoes }
        </Route>
      </Router>
    </IntlProviderWrapper>
  </Provider>
)

export default Routes
