import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import formState from './formReducer'
import simpleEpic from '../../content/sample/simpleEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    formState,

})

export const rootEpic = combineEpics (
    simpleEpic,
)