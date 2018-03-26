import { ofType } from 'redux-observable'
import { delay, mapTo } from 'rxjs/operators'
import { SLIDE_BOX, STOP_BOX } from '../../redux/actions/actionTypes'

const simpleEpic = action$ =>
    action$.pipe(
        ofType(SLIDE_BOX),
        delay(4000),
        mapTo({ type: STOP_BOX }))

export default simpleEpic