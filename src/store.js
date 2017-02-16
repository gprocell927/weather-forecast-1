import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const middleware = [thunk, logger()]

const store = createStore(rootReducer, {}, applyMiddleware(...middleware))


export default store
