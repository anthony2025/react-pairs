import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default configureStore
