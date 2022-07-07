import { createStore, applyMiddleware, combineReducers } from 'redux'
import { logger } from 'redux-logger'
import reduxThunk from 'redux-thunk'

import { countReducer } from './counter/reducer'
import { newsReducer } from './news/reducer'

const rootReducer = combineReducers({
    countReducer,
    newsReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk,logger))

export default store;