import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import sampleEpic from '../../content/sample/sampleEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,

})

export const rootEpic = combineEpics (
    sampleEpic,
)