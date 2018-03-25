import {
    SLIDE_BOX,
    SOME_ACTION,
} from './actionTypes'

export const someAction = (somePayload) => {
    return ({type: SOME_ACTION, payload: somePayload})
}

export const slideBox = () => {
    return ({type: SLIDE_BOX})
}
