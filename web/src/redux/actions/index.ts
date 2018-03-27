import {
    SLIDE_BOX,
    SOME_ACTION, SPIN_LOGO_CHANGE,
} from './actionTypes'

export const someAction = (somePayload) => {
    return ({type: SOME_ACTION, payload: somePayload})
}

export const slideBox = () => {
    return ({type: SLIDE_BOX})
}

export const spinLogoChange = () => {
    return (dispatch, getState) => {
        const spinChange = !(getState().appState.spinLogo)
        dispatch({type: SPIN_LOGO_CHANGE, spinChange})
    }
}