import {formState, FormStateTypes} from '../store/templates/formState'

export default (state: FormStateTypes = formState, action) => {
    switch (action.type) {
        case 'some action': {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}