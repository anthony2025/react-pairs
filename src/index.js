import React from 'react'
import ReactDOM from 'react-dom'

import injectResetStyles from 'utils/reset'
import App from 'components/App'

import getStore from 'store/configureStore'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

injectResetStyles()
