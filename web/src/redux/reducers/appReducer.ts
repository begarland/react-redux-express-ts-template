import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {SLIDE_BOX, SPIN_LOGO_CHANGE, STOP_BOX} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                showNavigateButton: action.payload.pathname === '/',
                moveBox: false,
            }
        }
        case SLIDE_BOX: {
            return {
                ...state,
                moveBox: true,
            }
        }
        case STOP_BOX: {
            return {
                ...state,
                moveBox: false,
            }
        }
        case SPIN_LOGO_CHANGE: {
            return {
                ...state,
                spinLogo: action.spinChange
            }
        }

        default: {
            return state
        }
    }
}